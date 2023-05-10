import { useNavigate } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import { axiosInstance } from "../../../../axiosConfig";
import RGKForm from "../RGKForm";
import RGKInput from "../../RGKInput";
import RGKButton from "../../RGKButton";
import styles from "./styles.module.css";

const RGKLoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data: any) => {
    const { username, password } = data;
    await axiosInstance
      .post("/login", { login: username, psw: password })
      .then((resp) => {
        if (resp) {
          localStorage.setItem("token", "123");
          navigate("/dashboard");
        }
      });
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
