import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import { Button, Select } from "antd";
import styles from "./styles.module.css";

const Settings = () => {
  const records = [
    { value: "tkdar", title: "tkdar" },
    { value: "tkdar1", title: "tkdar1" },
    { value: "tkdar2", title: "tkdar2" },
    { value: "tkdar3", title: "tkdar3" },
  ];
  return (
    <div className={styles.Settings}>
      <span>Настройки</span>
      <Select
        defaultValue={records[0]}
        options={records.map((province) => ({
          label: province.title,
          value: province.value,
        }))}
        style={{ backgroundColor: "transparent", color: "white" }}
        bordered={false}
      />
      <Button
        type="ghost"
        shape="circle"
        style={{ borderColor: "transparent" }}
        icon={<SettingOutlined style={{ fontSize: "20px", color: "white" }} />}
      />
    </div>
  );
};

export default Settings;
