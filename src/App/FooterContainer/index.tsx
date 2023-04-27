import { FC, PropsWithChildren } from "react";
import { Input } from "antd";
import styles from "./styles.module.css";

const FooterContainer: FC<PropsWithChildren> = (props) => {
  return (
    <div className={styles.FooterContainer}>
      {props.children}
      <Input placeholder="Basic usage" />
    </div>
  );
};
export default FooterContainer;
