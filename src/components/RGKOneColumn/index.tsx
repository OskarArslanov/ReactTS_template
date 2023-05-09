import { Column } from "@ant-design/plots";
import { FC } from "react";
import styles from "./styles.module.css";

export interface OneColumnValueType {
  type: string;
  value: number;
}
interface RGKOneColumnProps {
  dataPos?: "left" | "middle" | "right";
  data?: OneColumnValueType[];
  isBig?: boolean;
  height?: number;
  typeName: string;
  valueName: string;
  color?: string;
}
const RGKOneColumn: FC<RGKOneColumnProps> = (props) => {
  const config = {
    data: props.data || [],
    xField: "type",
    yField: "value",
    color: props.color || "#57AEFE",
    label: {
      position: props.dataPos || "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: props.typeName,
      },
      value: {
        alias: props.valueName,
      },
    },
  };
  return (
    <div className={styles.RGKOneColumn}>
      <Column {...config} height={props.height} />
    </div>
  );
};

export default RGKOneColumn;
