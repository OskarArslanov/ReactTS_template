import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import HeaderLayout from "./HeaderLayout";
import styles from "./styles.module.css";

const AppLayout = () => {
  return (
    <div className={styles.AppLayout_Container}>
      <HeaderLayout>
        <div>header</div>
      </HeaderLayout>
      <BodyLayout>
        <div>body</div>
      </BodyLayout>
      <FooterLayout>
        <div>footer</div>
      </FooterLayout>
    </div>
  );
};
export default AppLayout;
