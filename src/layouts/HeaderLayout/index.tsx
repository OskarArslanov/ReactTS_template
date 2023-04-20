import { FC } from "react";
import styles from "./styles.module.css";

interface HeaderLayoutProps {
  children: JSX.Element;
}
const HeaderLayout: FC<HeaderLayoutProps> = (props) => {
  return (
    <header className={styles.HeaderLayout_Container}>{props.children}</header>
  );
};
export default HeaderLayout;
