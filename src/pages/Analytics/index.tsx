import { OneColumnValueType } from "@dto/card";
import { RGKLineType } from "@components/RGKLine";
import RGKCardLine from "@components/RGKLine/RGKCardLine";
import { RGKMapType } from "@components/RGKMap";
import RGKCardMap from "@components/RGKMap/RGKCardMap";
import RGKCardOneColumnSelector from "@components/RGKOneColumn/RGKCardOneColumnSelector";
import { RGKPieType } from "@components/RGKPie";
import RGKCardPie from "@components/RGKPie/RGKCardPie";
import styles from "./styles.module.css";

const MOCK_LINE: RGKLineType[] = [
  {
    date: "1991",
    value: 3,
  },
  {
    date: "1992",
    value: 4,
  },
  {
    date: "1993",
    value: 3.5,
  },
  {
    date: "1994",
    value: 5,
  },
  {
    date: "1995",
    value: 4.9,
  },
  {
    date: "1996",
    value: 6,
  },
  {
    date: "1997",
    value: 7,
  },
  {
    date: "1998",
    value: 9,
  },
  {
    date: "1999",
    value: 13,
  },
];

const MOCK_PIE: RGKPieType[] = [
  {
    type: "тип1",
    value: 27,
  },
  {
    type: "тип2",
    value: 25,
  },
  {
    type: "тип3",
    value: 18,
  },
  {
    type: "тип4",
    value: 15,
  },
  {
    type: "тип5",
    value: 10,
  },
  {
    type: "тип6",
    value: 5,
  },
];

const MOCK_ONECOLUMN: OneColumnValueType[] = [
  { value: "0", type: "Янв" },
  { value: "1", type: "Фер" },
  { value: "2", type: "Мар" },
  { value: "3", type: "Апр" },
  { value: "4", type: "Май" },
  { value: "5", type: "Июн" },
];

const MOCK_MAP: RGKMapType[] = [
  {
    name: "car1",
    status: "active",
    coordinates: [55.751574, 37.573856],
  },
  {
    name: "car2",
    status: "error",
    coordinates: [55.741574, 37.573856],
  },
  {
    name: "car3",
    status: "active",
    coordinates: [55.731574, 37.573856],
  },
  {
    name: "car4",
    status: "offline",
    coordinates: [55.721574, 37.573856],
  },
];

const Analytics = () => {
  return (
    <div className={styles.Analytics}>
      <div className={styles.Analytics_Cards}>
        <RGKCardLine data={MOCK_LINE} title="Эффективность расхода топлива" />
        <RGKCardPie
          data={MOCK_PIE}
          title="Распределение расходов на транспорт"
        />
      </div>
      <div className={styles.Analytics_Cards}>
        <RGKCardOneColumnSelector
          title="Отчет план/факт"
          valueName="Расход"
          typeName="куб.м."
          data={MOCK_ONECOLUMN}
          values1={[
            { id: 1, value: "Подразделение 1" },
            { id: 2, value: "Подразделение 2" },
          ]}
          placeholder1="Выберите подразделение"
          values2={[
            { id: 1, value: "ТС тип 1" },
            { id: 2, value: "ТС тип 2" },
          ]}
          placeholder2="Выберите тип ТС"
        />
        <RGKCardMap title="Карта с машинами автопарка" data={MOCK_MAP} />
      </div>
    </div>
  );
};

export default Analytics;
