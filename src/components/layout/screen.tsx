import React from "react";
import { useDeviceContext } from "../../context/device-context/device-context";
import { compileAndValidate } from "../../schema/validation/schema-validation";

//props definition
interface ScreenProps {
  type?: string;
  title: string;
  styles?: { [key: string]: string | number };
  components?: any[];
}
type Props = ScreenProps;

const LayoutScreenComponent = (props: Props) => {
  
  //validate props against screen schema
  compileAndValidate(props.type ? props.type : 'screen', props)

  const type = props.type;
  const title = props.title;
  const styles = props.styles;
  const components = props.components;

  //render components
  const renderComponents = (components: any) => {
    return components?.map((component: any, componentIndex: number) => {
      return renderComponent(component, componentIndex);
    });
  };
  //render a component
  const renderComponent = (component: any, index: number) => {
    //React.Fragment to append all components
    /* <React.Fragment key={index}>
      {component.type === "header" && <LayoutHeaderComponent {...component} />}
      {component.type === "footer" && <LayoutFooterComponent {...component} />}
      {component.type === "sidebar" && <LayoutSidebarComponent {...component} />}
      {component.type === "section" && <LayoutSectionComponent {...component} />}
      {component.type === "drawer" && <LayoutDrawerComponent {...component} />}
    </React.Fragment>;*/
  };
  const { device } = useDeviceContext();
  console.log(device);
  return (
    <div>
      <p>Current device: {device}</p>
    </div>
  );
};

export default LayoutScreenComponent;
