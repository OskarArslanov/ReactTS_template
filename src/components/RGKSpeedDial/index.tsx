import React, { FC, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useAuth, usePaths } from "../../utils/hooks";

export interface RGKSpeedDialMenuType {
  name: string;
  icon: React.ReactNode;
  href: string;
}
interface RGKSpeedDialProps {
  items: RGKSpeedDialMenuType[];
  menuButtonSize: SizeType;
}
const RGKSpeedDial: FC<RGKSpeedDialProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();
  const paths = usePaths();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles.RGKSpeedDial}
      style={{ display: auth.token ? "flex" : "none" }}
    >
      {isOpen && (
        <ul className={styles.RGKSpeedDial_ItemList}>
          {props.items.map((item) => {
            const isSelected = item.href === paths[1];
            const selectedClass =
              styles[
                `RGKSpeedDial_Item__${isSelected ? "selected" : "non_selected"}`
              ];
            return (
              <Link
                to={item.href}
                key={item.name}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  icon={item.icon}
                  shape="round"
                  className={`${styles.RGKSpeedDial_Item} ${selectedClass}`}
                >
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </ul>
      )}
      <Button
        type="primary"
        shape="circle"
        icon={<PlusOutlined />}
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        size={props.menuButtonSize}
        onClick={toggleOpen}
        className={styles.RGKSpeedDial_MenuButton}
      />
    </div>
  );
};

export default RGKSpeedDial;
