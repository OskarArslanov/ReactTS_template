/* eslint-disable react/no-array-index-key */
import RGKStats, { RGKStatsType } from "@components/RGKStats";
import styles from "./styles.module.css";

const MOCK_CARDS_1: RGKStatsType[] = [
  {
    title: "Валовая прибыль",
    value: "892000000",
    planName: "К плану",
    planValue: "98%",
    planNamePrev: "К 2022",
    planValuePrev: "98%",
  },
  {
    title: "Частичная прибыль",
    value: "155000000",
    planName: "К плану",
    planValue: "104%",
    planNamePrev: "К 2022",
    planValuePrev: "24%",
  },
  {
    title: "EBITBA",
    value: "434000000",
    planName: "К плану",
    planValue: "107%",
    planNamePrev: "К 2022",
    planValuePrev: "46%",
  },
  {
    title: "OPEX",
    value: "434000000",
    planName: "К плану",
    planValue: "115%",
    planNamePrev: "К 2022",
    planValuePrev: "70%",
  },
  {
    title: "Доля ФОТ",
    value: "18%",
    planName: "К плану",
    planValue: "103%",
    planNamePrev: "К 2022",
    planValuePrev: "15%",
  },
  {
    title: "Выручка/чел",
    value: "892000000",
    planName: "К плану",
    planValue: "95%",
    planNamePrev: "К 2022",
    planValuePrev: "4%",
  },
];

const MOCK_CARDS_2: RGKStatsType[] = [
  {
    title: "Продажи",
    value: "1875000000",
    planName: "К плану",
    planValue: "88%",
    planNamePrev: "К 2022",
    planValuePrev: "11%",
  },
  {
    title: "Частичная прибыль",
    value: "983000000",
    planName: "К плану",
    planValue: "131%",
    planNamePrev: "К 2022",
    planValuePrev: "20%",
  },
  {
    title: "Точки продаж",
    value: "129",
    planName: "К плану",
    planValue: "101%",
    planNamePrev: "К 2022",
    planValuePrev: "7%",
  },
  {
    title: "Доля акционного ТО",
    value: "434000000",
    planName: "К плану",
    planValue: "114%",
    planNamePrev: "К 2022",
    planValuePrev: "12%",
  },
  {
    title: "Доля ФОТ",
    value: "18%",
    planName: "К плану",
    planValue: "78%",
    planNamePrev: "К 2022",
    planValuePrev: "12%",
  },
  {
    title: "Выручка/чел",
    value: "12000000",
    planName: "К плану",
    planValue: "127%",
    planNamePrev: "К 2022",
    planValuePrev: "33%",
  },
];

const Gasoline = () => {
  return (
    <div className={styles.Gasoline}>
      <div className={styles.Gasoline_Title}>KPI розничной сети</div>
      <div className={styles.Gasoline_Part}>
        <div className={styles.Gasoline_Part_Title}>Финансы</div>
        <div className={styles.Gasoline_Part_ItemList}>
          {MOCK_CARDS_1.map((item, index) => (
            <RGKStats data={item} key={`${index} ${item.value}`} />
          ))}
        </div>
      </div>
      <div className={styles.Gasoline_Part}>
        <div className={styles.Gasoline_Part_Title}>Продажи</div>
        <div className={styles.Gasoline_Part_ItemList}>
          {MOCK_CARDS_2.map((item, index) => (
            <RGKStats data={item} key={`${index} ${item.value}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gasoline;
