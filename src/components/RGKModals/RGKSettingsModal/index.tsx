import { Modal } from "antd";
import { FC } from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import RGKButton from "@components/controls/RGKButton";
import styles from "./styles.module.css";

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
      destroyOnClose
      onCancel={() => props.onClose(false)}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <ul className={styles.RGKSettingsModal}>
        <RGKButton text="Кнопка меню 1" />
        <RGKButton text="Кнопка меню 2" />
        <RGKButton text="Кнопка меню 3" />
        <RGKButton
          icon={<LogoutOutlined />}
          text="Выйти"
          onClick={() => {
            localStorage.clear();
            props.onClose(false);
            navigate("/login");
          }}
        />
      </ul>
    </Modal>
  );
};

export default RGKSettingsModal;
