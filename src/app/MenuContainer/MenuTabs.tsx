import {
  FundProjectionScreenOutlined,
  FileTextOutlined,
  SlidersOutlined,
  RadarChartOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import { RGKSpeedDialMenuType } from '../../components/RGKSpeedDial';

const MenuTabs: RGKSpeedDialMenuType[] = [
  {
    name: 'Дашборд',
    icon: <FundProjectionScreenOutlined />,
    href: 'dashboard',
  },
  {
    name: 'Отчеты',
    icon: <FileTextOutlined />,
    href: 'reports',
  },
  {
    name: 'Аналитика мониторинга',
    icon: <SlidersOutlined />,
    href: 'analytics',
  },
  {
    name: 'Топливная аналитика',
    icon: <RadarChartOutlined />,
    href: 'gasoline',
  },
  {
    name: 'Агро аналитика',
    icon: <AreaChartOutlined />,
    href: 'agro',
  },
];

export default MenuTabs;
