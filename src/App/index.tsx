import { Outlet } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";
import Logo from "../assets/Logo.tsx";
import Settings from "./HeaderContainer/Settings";

const App = () => {
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <Logo />
        <Settings />
      </HeaderContainer>
      <BodyContainer>
        <Outlet />
      </BodyContainer>
      <FooterContainer>footer</FooterContainer>
    </div>
  );
};
export default App;
