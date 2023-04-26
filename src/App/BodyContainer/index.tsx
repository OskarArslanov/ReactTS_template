import { FC } from "react";
import styles from "./styles.module.css";

interface BodyContainerProps {
  children: JSX.Element;
}
const BodyContainer: FC<BodyContainerProps> = (props) => {
  return <body className={styles.BodyContainer}>{props.children}</body>;
};
export default BodyContainer;
