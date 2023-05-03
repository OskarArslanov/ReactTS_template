import { FC } from "react";
import { Line } from "@ant-design/plots";
import styles from "./styles.module.css";

export interface RGKLineType {
  date: string;
  value: number;
}

interface RGKLineProps {
  data: RGKLineType[];
}

const RGKLine: FC<RGKLineProps> = (props) => {
  const config = {
    data: props.data,
    xField: "date",
    yField: "value",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return (
    <div className={styles.RGKLine}>
      <Line {...config} />
    </div>
  );
};

export default RGKLine;
