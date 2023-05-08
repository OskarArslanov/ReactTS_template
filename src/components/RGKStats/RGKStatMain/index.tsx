import { FC } from "react";
import millify from "millify";
import styles from "./styles.module.css";

interface RGKStatMainProps {
  title: string;
  value: string;
}

const RGKStatMain: FC<RGKStatMainProps> = (props) => {
  const isHasPercentage = props.value.includes("%");
  let value = props.value;
  let valueName;
  if (!isHasPercentage) {
    value = millify(Number(props.value), {
      precision: 0,
      lowercase: true,
      locales: "ru",
      space: true,
      units: ["", "тыс", "млн", "млрд", "квдр", "квнт"],
    });
    const splitedValue = value.split(" ");
    value = splitedValue[0];
    valueName = splitedValue[1].concat(". \u20BD");
  }
  return (
    <div className={styles.RGKStatMain}>
      <div className={styles.RGKStatMain_Title}>{props.title}</div>
      <div className={styles.RGKStatMain_Value}>{value}</div>
      {valueName && (
        <div className={styles.RGKStatMain_ValueSecondary}>{valueName}</div>
      )}
    </div>
  );
};

export default RGKStatMain;
