export interface OneColumnValueType {
  type: string;
  value: string;
}

export interface CardOneColumDataType {
  title: string;
  data: OneColumnValueType[];
  subTitleName: string;
  subTitleValue: string;
}

export interface TwoColumnValueType {
  type: string;
  name: string;
  value: number;
}

export interface CardTwoColumDataType {
  title: string;
  data: TwoColumnValueType[];
}

export interface RGKTableTitleType {
  title: string;
  dataIndex: string;
  key: string;
  type: string;
  format?: string;
}

export interface CardTableDataType {
  title: string;
  columns: RGKTableTitleType[];
  data: any[];
}
