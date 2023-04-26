import { FC } from "react";
import styles from "./styles.module.css";

interface FooterContainerProps {
  children: JSX.Element;
}
const FooterContainer: FC<FooterContainerProps> = (props) => {
  return <footer className={styles.FooterContainer}>{props.children}</footer>;
};
export default FooterContainer;
