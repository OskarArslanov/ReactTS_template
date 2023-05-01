import { FC } from "react";
import styles from "./styles.module.css";
import RGKOneColumn, { OneColumnValueType } from "../../RGKOneColumn";
import RGKCard from "..";

interface RGKCardOneColumnProps {
  title: string;
  text1: string;
  text2: string;
  data?: OneColumnValueType[];
  href?: string;
  hrefText?: string;
  valueName: string;
}

const RGKCardOneColumn: FC<RGKCardOneColumnProps> = (props) => {
  return (
    <RGKCard
      title={props.title}
      hrefText={props.hrefText}
      href={props.href}
      className={styles.RGKCardOneColumn}
    >
      <span className={styles.RGKCardOneColumn_Text1}>{props.text1}</span>
      <span className={styles.RGKCardOneColumn_Text2}>{props.text2}</span>
      <RGKOneColumn
        data={props.data}
        dataPos="middle"
        valueName={props.valueName}
      />
    </RGKCard>
  );
};

export default RGKCardOneColumn;
