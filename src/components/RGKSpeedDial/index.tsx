import React, { FC } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { useAuth } from "@utils/hooks";
import { useNavigate } from "react-router-dom";

export interface RGKSpeedDialMenuType {
  name: string;
  icon: React.ReactNode;
  href: string;
}
interface RGKSpeedDialProps {
  items: RGKSpeedDialMenuType[];
}
const RGKSpeedDial: FC<RGKSpeedDialProps> = (props) => {
  const auth = useAuth();
  const navigate = useNavigate();
  if (!auth) return null;
  return (
    <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 44 }}
      icon={<MenuOutlined />}
    >
      {props.items.map((item) => {
        return (
          <FloatButton
            icon={item.icon}
            key={item.name}
            onClick={() => navigate(item.href)}
          />
        );
      })}
    </FloatButton.Group>
  );
};

export default RGKSpeedDial;
