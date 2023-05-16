import { Table } from "antd";
import { FC } from "react";
import { RGKTableTitleType } from "dto/card";
import { alphabetSorter, numberSorter } from "@utils/sorters";
import styles from "./styles.module.css";

interface RGKTableProps {
  pagination: boolean;
  scroll?: { x: number; y: number };
  columns?: RGKTableTitleType[];
  data?: any[];
}
const RGKTable: FC<RGKTableProps> = (props) => {
  const columns = props.columns?.map((item: any) => {
    const rowData = props.data?.[0];
    const rowDataType = typeof rowData[item.key];
    let sorter;
    if (rowDataType === "string") {
      sorter = (a: any, b: any) => alphabetSorter(a[item.key], b[item.key]);
    }
    if (rowDataType === "number") {
      sorter = (a: any, b: any) => numberSorter(a[item.key], b[item.key]);
    }
    const result = {
      ...item,
      sorter,
      sortDirections: ["descend", "ascend"],
    };
    return result;
  });
  return (
    <div className={styles.RGKTable}>
      <Table
        dataSource={props.data}
        columns={columns}
        pagination={props.pagination ? undefined : false}
        scroll={props.scroll}
        size="middle"
      />
    </div>
  );
};

export default RGKTable;
