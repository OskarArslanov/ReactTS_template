import BodyContainer from "./BodyContainer";
import FooterContainer from "./FooterContainer";
import HeaderContainer from "./HeaderContainer";
import styles from "./styles.module.css";

const App = () => {
  return (
    <div className={styles.App_Container}>
      <HeaderContainer>
        <div>header</div>
      </HeaderContainer>
      <BodyContainer>
        <div>body</div>
      </BodyContainer>
      <FooterContainer>
        <div>footer</div>
      </FooterContainer>
    </div>
  );
};
export default App;
