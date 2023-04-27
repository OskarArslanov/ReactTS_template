import { useState } from "react";
import {
  FormOutlined,
  LineChartOutlined,
  MonitorOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import styles from "./styles.module.css";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Дашборд", "1", <LineChartOutlined />),
  getItem("Отчеты", "2", <FormOutlined />),
  getItem("Аналитика мониторинга", "3", <MonitorOutlined />),
  getItem("Топливная аналитика", "4", <LineChartOutlined />),
  getItem("Агро аналитика", "5", <LineChartOutlined />),
];

const MenuContainer = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav
      className={styles.MenuContainer}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </nav>
  );
};

export default MenuContainer;
