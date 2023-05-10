import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import { Button, Select } from "antd";
import { useState } from "react";
import styles from "./styles.module.css";
import RGKSettingsModal from "../../../components/RGKModals/RGKSettingsModal";
import { useAuth } from "../../../utils/hooks";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const auth = useAuth();

  const records = [
    { value: "tkdar", title: "tkdar" },
    { value: "tkdar1", title: "tkdar1" },
    { value: "tkdar2", title: "tkdar2" },
    { value: "tkdar3", title: "tkdar3" },
  ];

  return (
    <div
      className={styles.Settings}
      style={{ display: auth.token ? "flex" : "none" }}
    >
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
        onClick={() => setOpen(true)}
      />
      <RGKSettingsModal open={open} onClose={setOpen} />
    </div>
  );
};

export default Settings;
