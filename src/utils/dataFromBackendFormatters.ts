import { format } from "date-fns";
import { ru } from "date-fns/locale";
import {
  CardOneColumDataType,
  CardTableDataType,
  CardTwoColumDataType,
  RGKTableTitleType,
} from "dto/card";
import {
  parseDayMonthYearDateFromBackend,
  parseMonthYearDateFromBackend,
} from "./dates";

export const getCardDataForTwoColumn = (card?: any): CardTwoColumDataType => {
  const result = {
    title: card?.title,
    data: card?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      const name = item.name;
      let type = format(parseDayMonthYearDateFromBackend(item.xField), "d", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = item.yField;
      return { name, type, value };
    }),
  };
  return result;
};

export const getCardDataForOneColumn = (card?: any): CardOneColumDataType => {
  const result = {
    title: card?.title,
    data: card?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      let type = format(parseMonthYearDateFromBackend(item.xField), "LLL", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = Number(String(item.yField).split(".")[0]);
      return { type, value };
    }),
    subTitleName: String(Object.keys(card?.report_string?.data)?.[0]),
    subTitleValue: String(Object.values(card?.report_string?.data)?.[0]),
  };
  return result;
};

export const getCardDataForTwoColumnWithProgress = (
  card?: any
): CardTwoColumDataType => {
  const result = {
    title: card?.title,
    data: card?.chart.data?.map((item: any) => {
      if (!item) return undefined;
      const name = item.name;
      let type = format(parseMonthYearDateFromBackend(item.xField), "LLL", {
        locale: ru,
      });
      type = type.charAt(0).toUpperCase().concat(type.slice(1));
      const value = Number(String(item.yField).split(".")[0]);
      return { name, type, value };
    }),
  };
  return result;
};

export const getCardDataForTable = (card?: any): CardTableDataType => {
  const result = {
    title: card?.title,
    columns: card?.table.column_name.map((item: any) => {
      const cols = {
        title: item.column_name,
        dataIndex: item.key,
        key: item.key,
      };
      return cols;
    }),
    data: card?.table.data.map((item: any, index: number) => {
      const rows = {
        ...item,
        key: index,
      };
      return rows;
    }),
  };
  return result;
};

export const getDataForReport = (report?: any) => {
  const columns: RGKTableTitleType[] = report.column_name.map((item: any) => {
    const result = {
      title: item.column_name,
      dataIndex: item.key,
      key: item.key,
    };
    return result;
  });
  const data = report.report_data.map((item: any, index: number) => ({
    ...item,
    key: index,
  }));
  return { columns, data };
};
