import { Column } from "@ant-design/plots";
import { FC, useState } from "react";
import { OneColumnValueType } from "@dto/card";
import RGKReportTableModal from "@components/RGKModals/RGKReportTableModal";
import styles from "./styles.module.css";

interface RGKOneColumnProps {
  dataPos?: "left" | "middle" | "right";
  data?: OneColumnValueType[];
  isBig?: boolean;
  height?: number;
  typeName: string;
  valueName: string;
  color?: string;
  onPlotClick?: () => void;
  title?: string;
}
const RGKOneColumn: FC<RGKOneColumnProps> = (props) => {
  const [modal, setModal] = useState(false);

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
      <Column
        {...config}
        height={props.height}
        onEvent={(chart, event) => {
          if (event.type === "plot:click") {
            setModal(true);
          }
        }}
      />
      <RGKReportTableModal
        open={modal}
        onClose={() => setModal(false)}
        title={props.title}
      />
    </div>
  );
};

export default RGKOneColumn;
