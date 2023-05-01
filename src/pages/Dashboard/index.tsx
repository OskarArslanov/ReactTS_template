import RGKCardOneColumn from "../../components/RGKCard/RGKCardOneColumn";
import RGKCardTable from "../../components/RGKCard/RGKCardTable";
import RGKCardTwoColumn from "../../components/RGKCard/RGKCardTwoColumn";
import { OneColumnValueType } from "../../components/RGKOneColumn";
import { TwoColumnValueType } from "../../components/RGKTwoColumn";
import styles from "./styles.module.css";

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
      { name: "Rate1", value: 0 },
      { name: "Rate2", value: 1 },
    ],
  },
  {
    type: "Фев",
    nameValue: [
      { name: "Rate1", value: 0 },
      { name: "Rate2", value: 1 },
    ],
  },
  {
    type: "Мар",
    nameValue: [
      { name: "Rate1", value: 4 },
      { name: "Rate2", value: 3 },
    ],
  },
  {
    type: "Апр",
    nameValue: [
      { name: "Rate1", value: 12 },
      { name: "Rate2", value: 10 },
    ],
  },
  {
    type: "Май",
    nameValue: [
      { name: "Rate1", value: 6 },
      { name: "Rate2", value: 7 },
    ],
  },
  {
    type: "Июн",
    nameValue: [
      { name: "Rate1", value: 3 },
      { name: "Rate2", value: 2 },
    ],
  },
];

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Dashboard_SmallCards}>
        <RGKCardOneColumn
          title="Расход топлива"
          text1="В этом месяце"
          text2="567 тонн"
          hrefText="More"
          valueName="тонн"
          data={MOCK_ONECOLUMN_1}
        />
        <RGKCardOneColumn
          title="Общий пробег"
          text1="В этом месяце"
          text2="459.821 км"
          valueName="км"
          data={MOCK_ONECOLUMN_1}
        />
        <RGKCardTwoColumn title="Транспорт онлайн" data={MOCK_TWOCOLUMN_1} />
        <RGKCardTable
          title="GPS пробег всего автопарка по месяцам"
          hrefText="More"
          style={{ maxWidth: "100%", overflow: "auto" }}
        />
      </div>
      <div className={styles.Dashboard_BigCards}>
        <RGKCardTwoColumn
          title="Отчет план/факт"
          hrefText="More"
          data={MOCK_TWOCOLUMN_1}
        />
        <RGKCardTable title="Отчет план/факт" />
      </div>
    </div>
  );
};

export default Dashboard;
