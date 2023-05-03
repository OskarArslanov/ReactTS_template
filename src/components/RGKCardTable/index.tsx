import { FC } from "react";
import RGKTable from "../RGKTable";
import RGKCard from "../RGKCard";
import styles from "./styles.module.css";

interface RGKCardTableProps {
  title: string;
  href?: string;
  hrefText?: string;
  actions?: React.ReactNode[];
  style?: React.CSSProperties;
  scroll: { x: number; y: number };
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
      <RGKTable pagination={false} scroll={props.scroll} />
    </RGKCard>
  );
};

export default RGKCardTable;
