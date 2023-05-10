export interface AxisDataType {
  name: string;
  data: { name: string; color?: string }[];
}

export interface ColumnDataType {
  xAxis: AxisDataType;
  yAxis: AxisDataType;
}

export interface TwoColumnValueType {
  type: string;
  nameValue: { name: string; value: number }[];
}

export interface RGKTableTitleType {
  title: string;
  dataIndex: string;
  key: string;
}

export interface RGKSmallTableDataType {
  key: string | number;
  operator: string;
  balance: number;
}

export interface RGKLargeTableDataType {
  key: string | number;
  track: string;
  distance: number;
  planKm: number;
}
