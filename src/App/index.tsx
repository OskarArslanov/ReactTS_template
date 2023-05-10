import { Outlet } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";
import Logo from "../assets/Logo.tsx";
import Settings from "./HeaderContainer/Settings";
import MenuContainer from "./MenuContainer";

const App = () => {
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <Logo />
        <Settings />
      </HeaderContainer>
      <BodyContainer>
        <MenuContainer />
        <div className={styles.MainLayout}>
          <Outlet />
        </div>
      </BodyContainer>
      <FooterContainer />
    </div>
  );
};
export default App;
