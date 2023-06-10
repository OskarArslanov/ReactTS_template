import { Table } from "antd";
import { CSSProperties, FC } from "react";
import { RGKTableTitleType } from "@dto/card";
import { alphabetSorter, dateSorter, numberSorter } from "@utils/sorters";
import { toJS } from "mobx";
import { addMinutes, format } from "date-fns";
import ru from "date-fns/locale/ru";
import DownloadOutlined from "@ant-design/icons/lib/icons/DownloadOutlined";
import RGKButton from "@components/controls/RGKButton";
import { downloadXLSFile } from "@utils/fileLoaders";
import * as XLSX from "xlsx";
import styles from "./styles.module.css";

interface RGKTableProps {
  pagination: boolean;
  scroll?: { x?: number; y?: number };
  columns?: RGKTableTitleType[];
  data?: any[];
  name?: string;
  style?: CSSProperties;
}

const offset = new Date().getTimezoneOffset() + 180;
const RGKTable: FC<RGKTableProps> = (props) => {
  const exportExcel = async () => {
    const tableElt = document.getElementById(`${props.name}__forLoad__hidden`!);
    const workbook = XLSX.utils.table_to_book(tableElt);
    XLSX.writeFile(workbook, `${props.name}.xlsx`);
  };
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
            addMinutes(new Date(item[setup.key]), offset),
            setup.format!,
            {
              locale: ru,
            },
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
    }),
  );
  const columns = props.columns?.map((item, index) => {
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
    if (index === 0) return { ...result, fixed: "left", width: 100 };
    return result;
  });
  return (
    <div className={styles.RGKTable} style={props.style}>
      {!!props.name && !!props.data?.length && (
        <RGKButton
          onClick={exportExcel}
          icon={<DownloadOutlined />}
          text="Скачать отчет"
        />
      )}
      <Table
        id={props.name}
        dataSource={rows}
        // @ts-ignore
        columns={columns}
        pagination={props.pagination ? undefined : false}
        scroll={props.scroll}
        size="middle"
      />
      <Table
        id={`${props.name}__forLoad__hidden`}
        dataSource={rows}
        // @ts-ignore
        columns={columns}
        pagination={false}
        scroll={props.scroll}
        size="middle"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default RGKTable;
