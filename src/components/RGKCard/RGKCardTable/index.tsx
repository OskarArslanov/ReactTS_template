import { FC } from "react";
import RGKTable from "../../RGKTable";
import RGKCard from "..";
import styles from "./styles.module.css";

interface RGKCardTableProps {
  title: string;
  href?: string;
  hrefText?: string;
  actions?: React.ReactNode[];
  style?: React.CSSProperties;
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
      <RGKTable />
    </RGKCard>
  );
};

export default RGKCardTable;
