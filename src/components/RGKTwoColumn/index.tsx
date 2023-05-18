import { Column } from "@ant-design/plots";
import { FC, useState } from "react";
import { TwoColumnValueType } from "@dto/card";
import RGKReportTableModal from "@components/RGKModals/RGKReportTableModal";
import styles from "./styles.module.css";

interface RGKTwoColumnProps {
  dataPos?: "left" | "middle" | "right";
  colors?: string[];
  data?: TwoColumnValueType[];
  marginRatio?: number;
  isBig?: boolean;
  height?: number;
  title?: string;
}
const RGKTwoColumn: FC<RGKTwoColumnProps> = (props) => {
  const [modal, setModal] = useState(false);
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
export default RGKTwoColumn;
