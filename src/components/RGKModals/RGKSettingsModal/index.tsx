import { Modal } from "antd";
import { FC } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import RGKButton from "../../controls/RGKButton";

interface RGKSettingsModalProps {
  open: boolean;
  onClose: (data: boolean) => void;
}
const RGKSettingsModal: FC<RGKSettingsModalProps> = (props) => {
  const navigate = useNavigate();
  return (
    <Modal
      title="Настройки"
      open={props.open}
      onOk={() => props.onClose(false)}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <ul className={styles.RGKSettingsModal}>
        <RGKButton text="Кнопка меню 1" />
        <RGKButton text="Кнопка меню 2" />
        <RGKButton text="Кнопка меню 3" />
        <RGKButton
          icon={<LogoutOutlined />}
          text="Выйти"
          onClick={() => {
            localStorage.removeItem("rgkAuth");
            props.onClose(false);
            navigate("/");
          }}
        />
      </ul>
    </Modal>
  );
};

export default RGKSettingsModal;
