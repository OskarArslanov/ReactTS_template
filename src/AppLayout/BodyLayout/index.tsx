import { FC } from "react";
import styles from "./styles.module.css";

interface BodyLayoutProps {
  children: JSX.Element;
}
const BodyLayout: FC<BodyLayoutProps> = (props) => {
  return <body className={styles.BodyLayout_Container}>{props.children}</body>;
};
export default BodyLayout;
