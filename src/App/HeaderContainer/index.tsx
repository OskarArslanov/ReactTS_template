import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const HeaderContainer: FC<PropsWithChildren> = (props) => {
  return <div className={styles.HeaderContainer}>{props.children}</div>;
};
export default HeaderContainer;
