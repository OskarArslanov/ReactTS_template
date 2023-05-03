import { Column } from "@ant-design/plots";
import { FC } from "react";
import styles from "./styles.module.css";

export interface OneColumnValueType {
  type: string;
  sales: number;
}
interface RGKOneColumnProps {
  dataPos?: "left" | "middle" | "right";
  data?: OneColumnValueType[];
  valueName: string;
  isBig?: boolean;
  height?: number;
}
const RGKOneColumn: FC<RGKOneColumnProps> = (props) => {
  const config = {
    data: props.data || [],
    xField: "type",
    yField: "sales",
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
        alias: "Тон",
      },
      sales: {
        alias: props.valueName,
      },
    },
  };
  return (
    <div className={styles.RGKOneColumn}>
      <Column {...config} height={props.height} />
    </div>
    // width={props.isBig ? 530 : 230}
  );
};

export default RGKOneColumn;
