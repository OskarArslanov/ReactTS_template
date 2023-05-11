import { Table } from "antd";
import { FC } from "react";
import { RGKTableTitleType } from "dto/card";
import styles from "./styles.module.css";

interface RGKTableProps {
  pagination: boolean;
  scroll?: { x: number; y: number };
  columns: RGKTableTitleType[];
  data?: any[];
}
const RGKTable: FC<RGKTableProps> = (props) => {
  return (
    <div className={styles.RGKTable}>
      <Table
        dataSource={props.data}
        columns={props.columns}
        pagination={props.pagination ? undefined : false}
        scroll={props.scroll}
        size="middle"
      />
    </div>
  );
};

export default RGKTable;
