import Progress from "antd/lib/progress/progress";
import { OneColumnValueType } from "../../components/RGKOneColumn";
import { TwoColumnValueType } from "../../components/RGKTwoColumn";
import styles from "./styles.module.css";
import RGKCardOneColumn from "../../components/RGKOneColumn/RGKCardOneColumn";
import RGKCardTwoColumn from "../../components/RGKTwoColumn/RGKCardTwoColumn";
import RGKCardTwoColumnProgress from "../../components/RGKTwoColumn/RGKCardTwoColumnProgress";
import RGKCardTable from "../../components/RGKTable/RGKCardTable";
import { RGKTableTitleType } from "../../components/RGKTable";

const MOCK_ONECOLUMN_1: OneColumnValueType[] = [
  { value: 560, type: "Янв" },
  { value: 673, type: "Фер" },
  { value: 821, type: "Мар" },
  { value: 560, type: "Апр" },
  { value: 448, type: "Май" },
  { value: 578, type: "Июн" },
];

const MOCK_TWOCOLUMN_1: TwoColumnValueType[] = [
  {
    type: "Янв",
    nameValue: [
      { name: "Всего", value: 200 },
      { name: "В сети", value: 170 },
    ],
  },
  {
    type: "Фев",
    nameValue: [
      { name: "Всего", value: 200 },
      { name: "В сети", value: 160 },
    ],
  },
  {
    type: "Мар",
    nameValue: [
      { name: "Всего", value: 140 },
      { name: "В сети", value: 130 },
    ],
  },
  {
    type: "Апр",
    nameValue: [
      { name: "Всего", value: 220 },
      { name: "В сети", value: 190 },
    ],
  },
  {
    type: "Май",
    nameValue: [
      { name: "Всего", value: 150 },
      { name: "В сети", value: 130 },
    ],
  },
  {
    type: "Июн",
    nameValue: [
      { name: "Всего", value: 365 },
      { name: "В сети", value: 340 },
    ],
  },
];

const MOCK_TWOCOLUMN_2: TwoColumnValueType[] = [
  {
    type: "Янв",
    nameValue: [
      { name: "План", value: 500 },
      { name: "Факт", value: 450 },
    ],
  },
  {
    type: "Фев",
    nameValue: [
      { name: "План", value: 500 },
      { name: "Факт", value: 480 },
    ],
  },
  {
    type: "Мар",
    nameValue: [
      { name: "План", value: 600 },
      { name: "Факт", value: 550 },
    ],
  },
  {
    type: "Апр",
    nameValue: [
      { name: "План", value: 440 },
      { name: "Факт", value: 300 },
    ],
  },
  {
    type: "Май",
    nameValue: [
      { name: "План", value: 400 },
      { name: "Факт", value: 350 },
    ],
  },
  {
    type: "Июн",
    nameValue: [
      { name: "План", value: 800 },
      { name: "Факт", value: 700 },
    ],
  },
  {
    type: "Июл",
    nameValue: [
      { name: "План", value: 440 },
      { name: "Факт", value: 300 },
    ],
  },
  {
    type: "Авг",
    nameValue: [
      { name: "План", value: 400 },
      { name: "Факт", value: 350 },
    ],
  },
  {
    type: "Сен",
    nameValue: [
      { name: "План", value: 340 },
      { name: "Факт", value: 290 },
    ],
  },
  {
    type: "Окт",
    nameValue: [
      { name: "План", value: 600 },
      { name: "Факт", value: 500 },
    ],
  },
  {
    type: "Ноя",
    nameValue: [
      { name: "План", value: 400 },
      { name: "Факт", value: 300 },
    ],
  },
  {
    type: "Дек",
    nameValue: [
      { name: "План", value: 800 },
      { name: "Факт", value: 700 },
    ],
  },
];

const MOCK_SMALLTABLE_COLUMNS: RGKTableTitleType[] = [
  {
    title: "Топливный оператор",
    dataIndex: "operator",
    key: "operator",
  },
  {
    title: "Баланс",
    dataIndex: "balance",
    key: "balance",
  },
];

const MOCK_SMALLTABLE_DATA = [
  {
    key: "2",
    operator: "Лукойл-Ликард",
    balance: 691676503,
  },
];

const MOCK_LARGETABLE_COLUMNS: RGKTableTitleType[] = [
  {
    title: "Машины",
    dataIndex: "track",
    key: "track",
  },
  {
    title: "Дистанция(км)",
    dataIndex: "distance",
    key: "distance",
  },
  {
    title: "План(км)",
    dataIndex: "planKm",
    key: "planKm",
  },
  {
    title: "План(%)",
    dataIndex: "planPerc",
    key: "planPerc",
  },
];

const MOCK_LARGETABLE_DATA = [
  {
    key: "1",
    track: "Track-1",
    distance: 150000,
    planKm: 200000,
    planPerc: <Progress percent={(150000 / 200000) * 100} size="small" />,
  },
  {
    key: "2",
    track: "Track-2",
    distance: 100000,
    planKm: 200000,
    planPerc: <Progress percent={(100000 / 200000) * 100} size="small" />,
  },
  {
    key: "3",
    track: "Track-3",
    distance: 90000,
    planKm: 200000,
    planPerc: <Progress percent={(90000 / 200000) * 100} size="small" />,
  },
  {
    key: "4",
    track: "Track-4",
    distance: 80000,
    planKm: 200000,
    planPerc: <Progress percent={(80000 / 200000) * 100} size="small" />,
  },
  {
    key: "5",
    track: "Track-5",
    distance: 70000,
    planKm: 200000,
    planPerc: <Progress percent={(70000 / 200000) * 100} size="small" />,
  },
];

const Dashboard = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.Dashboard_SmallCards}>
        <RGKCardOneColumn
          key="Расход топлива"
          title="Расход топлива"
          text1="В этом месяце"
          text2="567 тонн"
          hrefText="More"
          valueName="тонн"
          typeName="мес"
          data={MOCK_ONECOLUMN_1}
          height={150}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardOneColumn
          color="#63DAAB"
          typeName="мес"
          key="Общий пробег"
          title="Общий пробег"
          text1="В этом месяце"
          text2="459.821 км"
          valueName="км"
          data={MOCK_ONECOLUMN_1}
          height={150}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardTwoColumn
          colors={["#FFC069", "#FF4D4F"]}
          key="Транспорт онлайн"
          title="Транспорт онлайн"
          data={MOCK_TWOCOLUMN_1}
          height={160}
          style={{ maxHeight: "300px" }}
        />
        <RGKCardTable
          columns={MOCK_SMALLTABLE_COLUMNS}
          data={MOCK_SMALLTABLE_DATA}
          key="GPS пробег всего автопарка по месяцам"
          title="GPS пробег всего автопарка по месяцам"
          hrefText="More"
        />
      </div>
      <div className={styles.Dashboard_LargeCards}>
        <RGKCardTwoColumnProgress
          progressbarColor="#FFC069"
          title="Отчет план/факт"
          hrefText="More"
          data={MOCK_TWOCOLUMN_2}
          height={160}
        />
        <RGKCardTable
          columns={MOCK_LARGETABLE_COLUMNS}
          data={MOCK_LARGETABLE_DATA}
          title="Отчет план/факт"
        />
      </div>
    </div>
  );
};

export default Dashboard;
