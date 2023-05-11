import { CSSProperties, FC } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

interface RGKButtonProps {
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  htmlType?: "button" | "reset" | "submit";
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
  shape?: "default" | "circle" | "round";
}

const RGKButton: FC<RGKButtonProps> = (props) => {
  const element = (
    <Button
      shape={props.shape}
      type={props.type}
      icon={props.icon}
      htmlType={props.htmlType || "button"}
      className={styles.RGKButton}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
    </Button>
  );
  return props.href ? <Link to={props.href}>{element}</Link> : element;
};

export default RGKButton;
