import { FC } from "react";
import { Progress } from "antd";
import { CardTwoColumDataType, TwoColumnValueType } from "dto/card";
import styles from "./styles.module.css";
import RGKTwoColumn from "..";
import RGKCard from "../../RGKCard";

interface RGKCardTwoColumnProgressProps {
  data?: CardTwoColumDataType;
  href?: string;
  hrefText?: string;
  height?: number;
  colors?: string[];
  progressbarColor?: string;
}

const RGKCardTwoColumnProgress: FC<RGKCardTwoColumnProgressProps> = (props) => {
  const data = props.data?.data;
  const names: string[] = [];
  data?.map((item) =>
    names.includes(item.name) ? item : names.push(item.name)
  );
  const lastElements: TwoColumnValueType[] = [];
  names.map((item) => {
    const element = data?.findLast((el) => el.name === item);
    if (element) lastElements.push(element);
    return item;
  });
  const percentage = (lastElements[0].value / lastElements[1].value) * 100;
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.data?.title}
      href={props.href}
      hrefText={props.hrefText}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        {lastElements?.map((item) => (
          <div className={styles.RGKCardTwoColumn_DataValues_Container}>
            <span className={styles.RGKCardTwoColumn_Text1}>{item.name}</span>
            <span className={styles.RGKCardTwoColumn_Text2}>{item.value}</span>
          </div>
        ))}
      </div>
      <Progress
        percent={percentage}
        strokeLinecap="butt"
        strokeColor={props.progressbarColor}
        showInfo={false}
      />
      <RGKTwoColumn
        data={props.data?.data}
        height={props.height}
        colors={props.colors}
      />
    </RGKCard>
  );
};

export default RGKCardTwoColumnProgress;
