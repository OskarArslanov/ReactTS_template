import { useLocation } from "react-router-dom";
import RGKSpeedDial from "../../components/RGKSpeedDial";
import MenuTabs from "./MenuTabs";

const MenuContainer = () => {
  const location = useLocation();
  const currentTab = location.pathname.split("/")?.[1];
  return (
    <RGKSpeedDial items={MenuTabs} menuButtonSize="large" value={currentTab} />
  );
};
export default MenuContainer;
