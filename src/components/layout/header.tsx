import React from "react";
import { useDeviceContext } from "../../context/device-context/device-context";
import { compileAndValidate } from "../../schema/validation/schema-validation";

// Props definition
interface HeaderProps {
  type?: string;
  title: string;
  logo?: string;
  navigation?: {
    title: string;
    path: string;
    icon?: string;
    visibility?: string[];
  }[];
  visibility?: string[];
  styles?: {
    desktop?: { [key: string]: string | number };
    tablet?: { [key: string]: string | number };
    mobile?: { [key: string]: string | number };
  };
}
type Props = HeaderProps;

const LayoutHeaderComponent = (props: Props) => {
  // Validate props against schema
  compileAndValidate(props.type ? props.type : "header", props);

  const { title, logo, navigation, styles } = props;
  const { device } = useDeviceContext();

  // Apply styles based on the device context
  const currentStyles = styles ? styles[device as keyof typeof styles] : {};

  // Render navigation items
  const renderNavigationItems = (items: any[]) => {
    return items?.map((item, index) => (
      <li key={index} style={{ display: item.visibility?.includes(device) ? "block" : "none" }}>
        {item.icon && <img src={item.icon} alt={item.title} />}
        <a href={item.path}>{item.title}</a>
      </li>
    ));
  };

  return (
    <header style={currentStyles}>
      {logo && <img src={logo} alt="Logo" />}
      <h1>{title}</h1>
    </header>
  );
};

export default LayoutHeaderComponent;
