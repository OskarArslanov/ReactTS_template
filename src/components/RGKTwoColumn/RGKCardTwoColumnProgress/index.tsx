import { FC } from "react";
import { Progress } from "antd";
import styles from "./styles.module.css";
import RGKTwoColumn, { TwoColumnValueType } from "..";
import RGKCard from "../../RGKCard";

interface RGKCardTwoColumnProgressProps {
  title: string;
  data?: TwoColumnValueType[];
  href?: string;
  hrefText?: string;
  height?: number;
}

const RGKCardTwoColumnProgress: FC<RGKCardTwoColumnProgressProps> = (props) => {
  const dataValues = props.data?.[props.data.length - 1].nameValue;
  const value0 = dataValues?.[0].value;
  const name0 = dataValues?.[0].name;
  const value1 = dataValues?.[1].value;
  const name1 = dataValues?.[1].name;

  if (!value0 || !value1) return null;
  const percentage = (value0 / value1) * 100;
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.title}
      href={props.href}
      hrefText={props.hrefText}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        <div className={styles.RGKCardTwoColumn_DataValues_Container}>
          <span className={styles.RGKCardTwoColumn_Text1}>{name0}</span>
          <span className={styles.RGKCardTwoColumn_Text2}>{value0}</span>
        </div>
        <div className={styles.RGKCardTwoColumn_DataValues_Container}>
          <span className={styles.RGKCardTwoColumn_Text1}>{name1}</span>
          <span className={styles.RGKCardTwoColumn_Text2}>{value1}</span>
        </div>
      </div>
      <Progress
        percent={percentage}
        strokeLinecap="butt"
        strokeColor="#FFC069"
        showInfo={false}
      />
      <RGKTwoColumn data={props.data} height={props.height} />
    </RGKCard>
  );
};

export default RGKCardTwoColumnProgress;
