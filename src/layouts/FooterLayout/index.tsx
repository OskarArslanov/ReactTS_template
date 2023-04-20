import { FC } from "react";
import styles from "./styles.module.css";

interface FooterLayoutProps {
  children: JSX.Element;
}
const FooterLayout: FC<FooterLayoutProps> = (props) => {
  return (
    <footer className={styles.FooterLayout_Container}>{props.children}</footer>
  );
};
export default FooterLayout;
