import SettingOutlined from '@ant-design/icons/lib/icons/SettingOutlined';
import { useState } from 'react';
import styles from './styles.module.css';
import RGKSettingsModal from '../../../components/RGKModals/RGKSettingsModal';
import RGKSelect, { LabelValue } from '../../../components/controls/RGKSelect';
import RGKButton from '../../../components/controls/RGKButton';

const Settings = () => {
  const [open, setOpen] = useState(false);

  const user = localStorage.getItem('user');
  const records: LabelValue[] = [{ label: user!, value: user! }];

  return (
    <div className={styles.Settings}>
      <RGKSelect defaultValue={records[0]} values={records} bordered={false} />
      <RGKButton
        shape="circle"
        ghost
        style={{ border: '0px' }}
        icon={
          <SettingOutlined
            style={{
              fontSize: '20px',
              color: 'white',
            }}
          />
        }
        onClick={() => setOpen(true)}
      />
      <RGKSettingsModal open={open} onClose={setOpen} />
    </div>
  );
};

export default Settings;
