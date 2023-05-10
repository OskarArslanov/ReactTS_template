import { LoginOutlined } from "@ant-design/icons";
import { FC } from "react";
import RGKForm from "../RGKForm";
import RGKInput from "../../RGKInput";
import RGKButton from "../../RGKButton";
import styles from "./styles.module.css";

interface RGKLoginFormProps {
  onSubmit: (data: any) => void;
  error?: string;
}
const RGKLoginForm: FC<RGKLoginFormProps> = (props) => {
  return (
    <RGKForm
      onSubmit={props.onSubmit}
      className={styles.RGKLoginForm}
      error={props.error}
    >
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
  );
};

export default RGKLoginForm;
