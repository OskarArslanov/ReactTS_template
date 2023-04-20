import BodyLayout from "./BodyLayout";
import FooterLayout from "./FooterLayout";
import styles from "./styles.module.css";

const HeaderLayout = () => {
  return (
    <div className={styles.AppLayout_Container}>
      <HeaderLayout />
      <BodyLayout />
      <FooterLayout />
    </div>
  );
};
export default HeaderLayout;
