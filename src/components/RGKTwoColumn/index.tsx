import { Column } from "@ant-design/plots";
import { FC } from "react";
import { TwoColumnValueType } from "dto/card";
import styles from "./styles.module.css";

interface RGKTwoColumnProps {
  dataPos?: "left" | "middle" | "right";
  colors?: string[];
  data?: TwoColumnValueType[];
  marginRatio?: number;
  isBig?: boolean;
  height?: number;
}
const RGKTwoColumn: FC<RGKTwoColumnProps> = (props) => {
  const config = {
    data: props.data || [],
    isGroup: true,
    xField: "type",
    yField: "value",
    seriesField: "name",
    color: props.colors,
    marginRatio: props.marginRatio || 0.1,
    label: {
      position: props.dataPos || "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return (
    <div className={styles.RGKTwoColumn}>
      <Column {...config} height={props.height} />
    </div>
  );
};
export default RGKTwoColumn;
