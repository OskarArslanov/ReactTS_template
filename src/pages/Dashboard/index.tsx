import {
  DownloadOutlined,
  EditOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { OneColumnValueType } from "../../components/RGKOneColumn";
import { TwoColumnValueType } from "../../components/RGKTwoColumn";
import styles from "./styles.module.css";
import RGKCardOneColumn from "../../components/RGKOneColumn/RGKCardOneColumn";
import RGKCardTwoColumn from "../../components/RGKTwoColumn/RGKCardTwoColumn";
import RGKGroupCards from "../../components/RGKGroupCards";
import RGKCardTwoColumnProgress from "../../components/RGKTwoColumn/RGKCardTwoColumnProgress";
import RGKCardTable from "../../components/RGKTable/RGKCardTable";

const MOCK_ONECOLUMN_1: OneColumnValueType[] = [
  { sales: 0, type: "Янв" },
  { sales: 1, type: "Фер" },
  { sales: 2, type: "Мар" },
  { sales: 3, type: "Апр" },
  { sales: 4, type: "Май" },
  { sales: 5, type: "Июн" },
];

const MOCK_TWOCOLUMN_1: TwoColumnValueType[] = [
  {
    type: "Янв",
    nameValue: [
      { name: "План", value: 0 },
      { name: "Факт", value: 1 },
    ],
  },
  {
    type: "Фев",
    nameValue: [
      { name: "План", value: 0 },
      { name: "Факт", value: 1 },
    ],
  },
  {
    type: "Мар",
    nameValue: [
      { name: "План", value: 4 },
      { name: "Факт", value: 3 },
    ],
  },
  {
    type: "Апр",
    nameValue: [
      { name: "План", value: 12 },
      { name: "Факт", value: 10 },
    ],
  },
  {
    type: "Май",
    nameValue: [
      { name: "План", value: 6 },
      { name: "Факт", value: 7 },
    ],
  },
  {
    type: "Июн",
    nameValue: [
      { name: "План", value: 1 },
      { name: "Факт", value: 2 },
    ],
  },
];

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <RGKGroupCards
        smallCards={[
          <RGKCardOneColumn
            key="Расход топлива"
            title="Расход топлива"
            text1="В этом месяце"
            text2="567 тонн"
            hrefText="More"
            valueName="тонн"
            data={MOCK_ONECOLUMN_1}
            height={150}
          />,
          <RGKCardOneColumn
            key="Общий пробег"
            title="Общий пробег"
            text1="В этом месяце"
            text2="459.821 км"
            valueName="км"
            data={MOCK_ONECOLUMN_1}
            height={150}
          />,
        ]}
        bigCard={
          <RGKCardTwoColumnProgress
            title="Отчет план/факт"
            hrefText="More"
            data={MOCK_TWOCOLUMN_1}
            height={160}
          />
        }
      />
      <RGKGroupCards
        smallCards={[
          <RGKCardTwoColumn
            key="Транспорт онлайн"
            title="Транспорт онлайн"
            data={MOCK_TWOCOLUMN_1}
            height={160}
          />,
          <RGKCardTable
            scroll={{ x: 1000, y: 120 }}
            key="GPS пробег всего автопарка по месяцам"
            title="GPS пробег всего автопарка по месяцам"
            hrefText="More"
            actions={[
              <DownloadOutlined />,
              <EditOutlined />,
              <ShareAltOutlined />,
              <MoreOutlined style={{ transform: "rotate(90deg)" }} />,
            ]}
          />,
        ]}
        bigCard={
          <RGKCardTable scroll={{ x: 1000, y: 300 }} title="Отчет план/факт" />
        }
      />
    </div>
  );
};

export default Dashboard;
