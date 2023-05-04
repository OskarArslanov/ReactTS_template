import { CSSProperties, FC } from "react";
import styles from "./styles.module.css";
import RGKCard from "../../RGKCard";
import RGKOneColumn, { OneColumnValueType } from "..";

interface RGKCardOneColumnProps {
  title: string;
  text1: string;
  text2: string;
  data?: OneColumnValueType[];
  href?: string;
  hrefText?: string;
  valueName: string;
  height?: number;
  style?: CSSProperties;
}

const RGKCardOneColumn: FC<RGKCardOneColumnProps> = (props) => {
  return (
    <RGKCard
      title={props.title}
      hrefText={props.hrefText}
      href={props.href}
      style={props.style}
      className={styles.RGKCardOneColumn}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <span className={styles.RGKCardOneColumn_Text1}>{props.text1}</span>
        <span className={styles.RGKCardOneColumn_Text2}>{props.text2}</span>
        <RGKOneColumn
          data={props.data}
          dataPos="middle"
          valueName={props.valueName}
          height={props.height}
        />
      </div>
    </RGKCard>
  );
};

export default RGKCardOneColumn;
