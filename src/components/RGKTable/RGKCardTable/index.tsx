import { FC } from "react";
import styles from "./styles.module.css";
import RGKTable, { RGKTableTitleType } from "..";
import RGKCard from "../../RGKCard";

interface RGKCardTableProps {
  title: string;
  href?: string;
  hrefText?: string;
  actions?: React.ReactNode[];
  style?: React.CSSProperties;
  scroll?: { x: number; y: number };
  columns: RGKTableTitleType[];
  data?: any[];
}

const RGKCardTable: FC<RGKCardTableProps> = (props) => {
  return (
    <RGKCard
      title={props.title}
      href={props.href}
      hrefText={props.hrefText}
      actions={props.actions}
      style={props.style}
      className={styles.RGKCardTable}
    >
      <RGKTable
        data={props.data}
        pagination={false}
        scroll={props.scroll}
        columns={props.columns}
      />
    </RGKCard>
  );
};

export default RGKCardTable;
