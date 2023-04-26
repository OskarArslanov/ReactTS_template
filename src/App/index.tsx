import { BrowserRouter, Route } from "react-router-dom";
import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";
import Main from "../pages/main";

const App = () => {
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <div>header</div>
      </HeaderContainer>
      <BodyContainer>
        <BrowserRouter>
          <Route path="/main" element={<Main />} />
        </BrowserRouter>
      </BodyContainer>
      <FooterContainer>
        <div>footer</div>
      </FooterContainer>
    </div>
  );
};
export default App;
