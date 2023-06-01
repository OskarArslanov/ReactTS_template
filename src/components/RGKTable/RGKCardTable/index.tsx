import { FC } from "react";
import { CardTableDataType } from "@dto/card";
import RGKCard from "@components/RGKCard";
import styles from "./styles.module.css";
import RGKTable from "..";

interface RGKCardTableProps {
  href?: string;
  hrefText?: string;
  actions?: React.ReactNode[];
  style?: React.CSSProperties;
  scroll?: { x: number; y: number };
  data?: CardTableDataType;
}

const RGKCardTable: FC<RGKCardTableProps> = (props) => {
  return (
    <RGKCard
      title={props.data?.title}
      href={props.href}
      hrefText={props.hrefText}
      actions={props.actions}
      style={props.style}
      className={styles.RGKCardTable}
    >
      <RGKTable
        data={props.data?.data}
        pagination={false}
        scroll={props.scroll}
        columns={props.data?.columns}
      />
    </RGKCard>
  );
};

export default RGKCardTable;
