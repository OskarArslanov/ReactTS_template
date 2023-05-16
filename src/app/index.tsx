import { Link, Outlet } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";
import Logo from "../assets/Logo";
import Settings from "./HeaderContainer/Settings";
import MenuContainer from "./MenuContainer";
import { useAuth, usePaths } from "../utils/hooks";
import RGKButton from "../components/controls/RGKButton";

const App = () => {
  const auth = useAuth();
  const basePath = usePaths()[1];
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        {auth.accessToken ? (
          <Settings />
        ) : (
          <RGKButton
            href="/login"
            text="Войти"
            style={{ display: basePath === "login" ? "none" : "flex" }}
          />
        )}
      </HeaderContainer>
      <BodyContainer>
        <MenuContainer />
        <Outlet />
      </BodyContainer>
      <FooterContainer />
    </div>
  );
};
export default App;
