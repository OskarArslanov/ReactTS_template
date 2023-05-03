import { Column } from "@ant-design/plots";
import { FC } from "react";
import styles from "./styles.module.css";

export interface TwoColumnValueType {
  type: string;
  nameValue: { name: string; value: number }[];
}
interface RGKTwoColumnProps {
  dataPos?: "left" | "middle" | "right";
  colors?: string[];
  data?: TwoColumnValueType[];
  marginRatio?: number;
  isBig?: boolean;
  height?: number;
}
const RGKTwoColumn: FC<RGKTwoColumnProps> = (props) => {
  const adoptDataToAntd = props.data?.map((baseData) => {
    const dataForType = baseData.nameValue.map((base) => ({
      name: base.name,
      value: base.value,
      type: baseData.type,
    }));
    return dataForType;
  });
  let concatData: any = [];
  if (adoptDataToAntd?.length) {
    concatData = adoptDataToAntd.reduce((a, b) => a.concat(b));
  }
  const config = {
    data: concatData,
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
// width={props.isBig ? 530 : 230}
export default RGKTwoColumn;
