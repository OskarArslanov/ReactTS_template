import { Table } from "antd";
import { FC } from "react";
import { RGKTableTitleType } from "@dto/card";
import { alphabetSorter, dateSorter, numberSorter } from "@utils/sorters";
import { toJS } from "mobx";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import RGKCircleLoader from "@components/RGKCircleLoader";
import styles from "./styles.module.css";

interface RGKTableProps {
  pagination: boolean;
  scroll?: { x: number; y: number };
  columns?: RGKTableTitleType[];
  data?: any[];
  loading?: boolean;
}
const RGKTable: FC<RGKTableProps> = (props) => {
  const keysToFormat = toJS(
    props.columns
      ?.filter((item) => item.type === "date")
      .map((item) => ({
        key: item.key,
        format: item.format,
      }))
  );
  const rows = toJS(
    props.data?.map((item, index) => {
      const updatedRow = { ...item, key: index };
      if (keysToFormat) {
        keysToFormat.forEach((el) => {
          try {
            updatedRow[el.key] = format(new Date(item[el.key]), el.format!, {
              locale: ru,
            });
          } catch (err: any) {
            updatedRow[el.key] = format(new Date(item[el.key]), "P", {
              locale: ru,
            });
          }
        });
      }

      return updatedRow;
    })
  );
  const columns = props.columns?.map((item) => {
    let sorter;
    if (item.type === "string") {
      sorter = (a: any, b: any) => alphabetSorter(a[item.key], b[item.key]);
    }
    if (item.type === "number") {
      sorter = (a: any, b: any) => numberSorter(a[item.key], b[item.key]);
    }
    if (item.type === "date") {
      sorter = (a: any, b: any) => dateSorter(a[item.key], b[item.key]);
    }
    const result = {
      ...item,
      sorter,
      dataIndex: item.key,
      sortDirections: ["descend", "ascend"],
    };
    return result;
  });
  return (
    <div className={styles.RGKTable}>
      <RGKCircleLoader visible={!!props.loading} />
      <Table
        dataSource={rows}
        // @ts-ignore
        columns={columns}
        pagination={props.pagination ? undefined : false}
        scroll={props.scroll}
        size="middle"
      />
    </div>
  );
};

export default RGKTable;
