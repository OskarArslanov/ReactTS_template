import { Modal } from 'antd';
import { FC } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import RGKButton from '@components/controls/RGKButton';
import { reportsStore } from '@store/reportsStore';
import { dashboardStore } from '@store/dashboardStore';
import styles from './styles.module.css';

interface RGKSettingsModalProps {
  open: boolean;
  onClose: (data: boolean) => void;
}

export const resetStores = () => {
  localStorage.clear();
  reportsStore.reset();
  dashboardStore.reset();
};

const RGKSettingsModal: FC<RGKSettingsModalProps> = (props) => {
  const navigate = useNavigate();

  const handleExit = () => {
    resetStores();
    props.onClose(false);
    navigate('/rgk24/login');
  };
  return (
    <Modal
      title="Настройки"
      open={props.open}
      onOk={() => props.onClose(false)}
      destroyOnClose
      onCancel={() => props.onClose(false)}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
    >
      <ul className={styles.RGKSettingsModal}>
        <RGKButton text="Кнопка меню 1" />
        <RGKButton text="Кнопка меню 2" />
        <RGKButton text="Кнопка меню 3" />
        <RGKButton
          icon={<LogoutOutlined />}
          text="Выйти"
          onClick={handleExit}
        />
      </ul>
    </Modal>
  );
};

export default RGKSettingsModal;
