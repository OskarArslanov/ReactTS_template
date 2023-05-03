import { FC } from "react";
import { Pie } from "@ant-design/plots";
import styles from "./styles.module.css";

export interface RGKPieType {
  type: string;
  value: number;
}

interface RGKPieProps {
  data: RGKPieType[];
}

const RGKPie: FC<RGKPieProps> = (props) => {
  const config = {
    appendPadding: 10,
    data: props.data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [
      {
        type: "pie-legend-active",
      },
      {
        type: "element-active",
      },
    ],
  };
  return (
    <div className={styles.RGKPie}>
      <Pie {...config} />
    </div>
  );
};

export default RGKPie;
