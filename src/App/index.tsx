import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";
import Logo from "../assets/Logo.tsx";
import Settings from "./HeaderContainer/Settings";
import MenuContainer from "./MenuContainer";
import RGKLoginForm from "../components/controls/forms/RGKLoginForm";

const App = () => {
  const auth = localStorage.getItem("rgkAuth");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate("/");
  }, [auth]);
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <Logo />
        {auth && <Settings />}
      </HeaderContainer>
      <BodyContainer>
        {auth ? (
          <>
            <MenuContainer />
            <div className={styles.MainLayout}>
              <Outlet />
            </div>
          </>
        ) : (
          <RGKLoginForm />
        )}
      </BodyContainer>
      <FooterContainer />
    </div>
  );
};
export default App;
