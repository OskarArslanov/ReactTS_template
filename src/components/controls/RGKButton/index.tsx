import { FC } from "react";
import { Button } from "antd";
import styles from "./styles.module.css";

interface RGKButtonProps {
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  htmlType?: "button" | "reset" | "submit";
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const RGKButton: FC<RGKButtonProps> = (props) => {
  return (
    <Button
      type={props.type}
      icon={props.icon}
      htmlType={props.htmlType || "button"}
      className={styles.RGKButton}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
};

export default RGKButton;
