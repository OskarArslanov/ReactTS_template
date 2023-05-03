import { Table } from "antd";
import { FC } from "react";
import styles from "./styles.module.css";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

interface RGKTableProps {
  pagination: boolean;
  scroll: { x: number; y: number };
}
const RGKTable: FC<RGKTableProps> = (props) => {
  return (
    <div className={styles.RGKTable}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={props.pagination ? undefined : false}
        scroll={props.scroll}
        style={{ maxHeight: "none" }}
      />
    </div>
  );
};

export default RGKTable;
