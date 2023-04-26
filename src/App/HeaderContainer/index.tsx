import { FC } from "react";
import styles from "./styles.module.css";

interface HeaderContainerProps {
  children: JSX.Element;
}
const HeaderContainer: FC<HeaderContainerProps> = (props) => {
  return <header className={styles.HeaderContainer}>{props.children}</header>;
};
export default HeaderContainer;
