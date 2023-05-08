import { FunctionComponent } from "react";
import logo from "../resources/logo-white.svg";

interface SvgProps {
  style?: React.CSSProperties;
}

const Logo: FunctionComponent<SvgProps> = (props) => {
  return <img src={logo} style={props.style} />;
};

export default Logo;
