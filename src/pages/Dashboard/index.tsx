import RGKOneColumnTable, {
  OneColumnValueType,
} from "../../components/RGKOneColumnTable";
import RGKTwoColumnTable, {
  TwoColumnValueType,
} from "../../components/RGKTwoColumnTable";
import styles from "./styles.module.css";

const MOCK_ONECOLUMN_1: OneColumnValueType[] = [
  { sales: 0, type: "Янв" },
  { sales: 1, type: "Фер" },
  { sales: 2, type: "Мар" },
  { sales: 3, type: "Апр" },
  { sales: 4, type: "Май" },
  { sales: 5, type: "Июн" },
  { sales: 6, type: "Июл" },
  { sales: 7, type: "Авг" },
  { sales: 8, type: "Сен" },
  { sales: 9, type: "Окт" },
  { sales: 10, type: "Ноя" },
  { sales: 11, type: "Дек" },
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
      <RGKOneColumnTable data={MOCK_ONECOLUMN_1} dataPos="middle" />
      <RGKTwoColumnTable data={MOCK_TWOCOLUMN_1} dataPos="middle" />
    </div>
  );
};

export default Dashboard;
