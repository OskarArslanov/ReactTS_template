import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RGKLoginForm from "@components/controls/forms/RGKLoginForm";
import { axiosInstance } from "@store/axiosConfig";
import RGKCircleLoader from "@components/RGKCircleLoader";
import styles from "./styles.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (data: any) => {
    const { username, password } = data;
    setLoading(true);
    try {
      await axiosInstance
        .post("/login", { login: username, psw: password })
        .then((resp) => {
          setError(undefined);
          const accessToken = resp.data.access_token;
          const refreshToken = resp.data.refresh_token;
          localStorage.setItem("user", username);
          localStorage.setItem("access_token", accessToken);
          localStorage.setItem("refresh_token", refreshToken);
          navigate("/dashboard");
        });
    } catch (err: any) {
      setError("Не верный логин или пароль");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.Login}>
      <RGKCircleLoader visible={loading} />
      <RGKLoginForm onSubmit={handleSubmit} error={error} />
    </div>
  );
};

export default Login;
