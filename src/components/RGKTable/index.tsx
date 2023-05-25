import { Table } from "antd";
import { FC } from "react";
import { RGKTableTitleType } from "@dto/card";
import { alphabetSorter, dateSorter, numberSorter } from "@utils/sorters";
import { toJS } from "mobx";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import RGKCircleLoader from "@components/RGKCircleLoader";
import DownloadOutlined from "@ant-design/icons/lib/icons/DownloadOutlined";
import RGKButton from "@components/controls/RGKButton";
import { downloadXLSFile } from "@utils/fileLoaders";
import styles from "./styles.module.css";

interface RGKTableProps {
  pagination: boolean;
  scroll?: { x: number; y: number };
  columns?: RGKTableTitleType[];
  data?: any[];
  loading?: boolean;
}
const RGKTable: FC<RGKTableProps> = (props) => {
  const rowSetup = props.columns?.map((col) => ({
    key: col.key,
    type: col.type,
    format: col.format,
  }));

  const rows = toJS(
    props.data?.map((item, index) => {
      const updatedRow = { ...item, key: index };
      rowSetup?.forEach((setup) => {
        if (setup.type === "date") {
          updatedRow[setup.key] = format(
            new Date(item[setup.key]),
            setup.format!,
            {
              locale: ru,
            }
          );
        }
        if (setup.type === "action") {
          const url = updatedRow[setup.key];
          updatedRow[setup.key] = (
            <RGKButton
              style={{ alignSelf: "center" }}
              icon={<DownloadOutlined />}
              onClick={() => downloadXLSFile(url)}
            />
          );
        }
      });

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
