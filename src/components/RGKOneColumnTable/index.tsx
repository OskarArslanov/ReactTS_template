import { Column } from "@ant-design/plots";
import { FC } from "react";

export interface OneColumnValueType {
  type: string;
  sales: number;
}
interface RGKOneColumnTableProps {
  dataPos?: "left" | "middle" | "right";
  data: OneColumnValueType[];
}
const RGKOneColumnTable: FC<RGKOneColumnTableProps> = (props) => {
  const config = {
    data: props.data,
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
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return <Column {...config} />;
};

export default RGKOneColumnTable;
