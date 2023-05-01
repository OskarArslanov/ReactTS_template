import { useMemo, useState } from "react";
import {
  FormOutlined,
  LineChartOutlined,
  MonitorOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
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
  getItem(
    <Link to="dashboard">Дашборд</Link>,
    "dashboard",
    <LineChartOutlined />
  ),
  getItem(<Link to="reports">Отчеты</Link>, "reports", <FormOutlined />),
  getItem(
    <Link to="analytics">Аналитика мониторинга</Link>,
    "analytics",
    <MonitorOutlined />
  ),
  getItem(
    <Link to="gasoline">Топливная аналитика</Link>,
    "gasoline4",
    <LineChartOutlined />
  ),
  getItem(<Link to="agro">Агро аналитика</Link>, "agro", <LineChartOutlined />),
];

const MenuContainer = () => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const currentMenuTab = useMemo(() => {
    return location.pathname.split("/")[1];
  }, [location]);
  return (
    <nav
      className={styles.MenuContainer}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <Menu
        defaultSelectedKeys={[currentMenuTab]}
        selectedKeys={[currentMenuTab]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </nav>
  );
};

export default MenuContainer;
