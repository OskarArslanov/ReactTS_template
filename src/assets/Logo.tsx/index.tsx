import { FunctionComponent } from "react";
import logo from "../resources/Logo.png";

interface SvgProps {
  style?: React.CSSProperties;
}

const Logo: FunctionComponent<SvgProps> = (props) => {
  return <img src={logo} style={props.style} />;
};

export default Logo;
