import { FC } from "react";
import { Progress } from "antd";
import { CardTwoColumDataType, TwoColumnValueType } from "@dto/card";
import RGKCard from "@components/RGKCard";
import styles from "./styles.module.css";
import RGKTwoColumn from "..";

interface RGKCardTwoColumnProgressProps {
  data?: CardTwoColumDataType;
  href?: string;
  hrefText?: string;
  height?: number;
  colors?: string[];
  progressbarColor?: string;
}

const removeDuplicateNames = (data?: TwoColumnValueType[]) => {
  const result: Record<string, TwoColumnValueType> = {};
  data?.forEach((item) => {
    result[item.name] = item;
  });
  return Object.values(result);
};
const RGKCardTwoColumnProgress: FC<RGKCardTwoColumnProgressProps> = (props) => {
  const data = props.data?.data;
  const lastElements = removeDuplicateNames(data);
  const val0 = lastElements?.[0]?.value || 0;
  const val1 = lastElements?.[1]?.value || 1;
  const percentage = (val0 / val1) * 100;
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.data?.title}
      href={props.href}
      hrefText={props.hrefText}
      key={props.data?.title}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        {lastElements?.map((item) => (
          <div
            className={styles.RGKCardTwoColumn_DataValues_Container}
            key={item.name}
          >
            <span className={styles.RGKCardTwoColumn_Text1}>{item.name}</span>
            <span className={styles.RGKCardTwoColumn_Text2}>
              {Number(item.value).toLocaleString()}
            </span>
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
        title={props.data?.title}
        isBig
      />
    </RGKCard>
  );
};

export default RGKCardTwoColumnProgress;
