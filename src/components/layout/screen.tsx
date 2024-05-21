import React from "react";
import { useDeviceContext } from "../../context/device-context/device-context";
import { compileAndValidate } from "../../schema/validation/schema-validation";
import LayoutHeaderComponent from "./header";

//props definition
interface ScreenProps {
  type?: string;
  title: string;
  styles?: { [key: string]: string | number };
  components?: any[];
}
type Props = ScreenProps;

const LayoutScreenComponent = (props: Props) => {
  //validate props against schema
  compileAndValidate(props.type ? props.type : 'screen', props)

  const { type, title, styles, components } = props;
  const { device } = useDeviceContext();
  
  //TODO: TESTING
  const exampleHeader = {
    type: "header",
    title: "Example Header",
    logo: "logo.png",
    navigation: [
      { title: "Home", path: "/", visibility: ["user", "guest"] },
      { title: "Admin", path: "/admin", visibility: ["admin"] }
    ],
    styles: {
      desktop: { background: "blue"},
      tablet: { background: "green" },
      mobile: { background: "red" }
    }
  };
  let test = components || [];
  test?.push(exampleHeader);
  test?.push(exampleHeader);

  //render components
  const renderComponents = (components: any) => {
    return components?.map((component: any, componentIndex: number) => {
      return renderComponent(component, componentIndex);
    });
  };
  //render a component
  const renderComponent = (component: any, index: number) => {
    //React.Fragment to append all components
    return (
    <React.Fragment key={index}>
      {component.type === "header" && <LayoutHeaderComponent {...component} />}
    </React.Fragment>
    )
  };

  console.log(device);
  return (
    <div>
      <p>Current device: {device}</p>
     {renderComponents(test)}
    </div>
  );
};

export default LayoutScreenComponent;
