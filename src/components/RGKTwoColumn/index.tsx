import { Column } from "@ant-design/plots";
import { FC } from "react";

export interface TwoColumnValueType {
  type: string;
  nameValue: { name: string; value: number }[];
}
interface RGKTwoColumnProps {
  dataPos?: "left" | "middle" | "right";
  colors?: string[];
  data?: TwoColumnValueType[];
  marginRatio?: number;
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
    dodgePadding: 2,
    label: {
      position: props.dataPos || "middle",
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column {...config} />;
};

export default RGKTwoColumn;
