import { Spin } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";

interface RGKCircleLoaderProps {
  visible: boolean;
  full?: boolean;
}
const RGKCircleLoader: FC<RGKCircleLoaderProps> = (props) => {
  return (
    <Spin
      spinning={props.visible}
      delay={0}
      size="large"
      style={{ zIndex: 1, display: props.visible ? "flex" : "none" }}
      className={`${styles.RGKCircleLoader} ${
        styles[`RGKCircleLoader__${props.full ? "full" : "relative"}`]
      }`}
    />
  );
};
export default RGKCircleLoader;
