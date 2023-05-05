import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";
import RGKForm from "../RGKForm";
import RGKInput from "../../RGKInput";
import RGKButton from "../../RGKButton";

const RGKLoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (data: any) => {
    const { username, password } = data;
    const isUsernameOk = username === "tkdar";
    const isPasswordOk = password === "test_tkdar";
    const isAuthOk = isUsernameOk && isPasswordOk;
    if (isAuthOk) {
      localStorage.setItem("rgkAuth", username);
      navigate("/dashboard");
    }
  };
  return (
    <div className={styles.RGKLoginForm_Container}>
      <RGKForm onSubmit={handleSubmit} className={styles.RGKLoginForm}>
        <RGKInput
          label="Имя пользователя"
          required
          name="username"
          rules={{ required: true, minLength: 4, maxLength: 20 }}
          type="text"
          placeholder="username"
        />
        <RGKInput
          label="Пароль"
          name="password"
          rules={{ required: true, minLength: 6, maxLength: 20 }}
          type="password"
          placeholder="password"
        />
        <RGKButton htmlType="submit" text="Войти" icon={<LoginOutlined />} />
      </RGKForm>
    </div>
  );
};

export default RGKLoginForm;
