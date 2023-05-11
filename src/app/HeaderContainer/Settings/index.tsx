import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import { useState } from "react";
import styles from "./styles.module.css";
import RGKSettingsModal from "../../../components/RGKModals/RGKSettingsModal";
import RGKSelect, { LabelValue } from "../../../components/controls/RGKSelect";
import RGKButton from "../../../components/controls/RGKButton";

const Settings = () => {
  const [open, setOpen] = useState(false);

  const records: LabelValue[] = [
    { label: "tkdar", value: "tkdar" },
    { label: "tkdar1", value: "tkdar1" },
  ];

  return (
    <div className={styles.Settings}>
      <RGKSelect
        defaultValue={records[0]}
        values={records}
        style={{ backgroundColor: "transparent", color: "white" }}
      />
      <RGKButton
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
