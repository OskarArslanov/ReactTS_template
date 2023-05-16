import { CSSProperties, FC } from "react";
import { CardOneColumDataType } from "dto/card";
import RGKCard from "@components/RGKCard";
import styles from "./styles.module.css";
import RGKOneColumn from "..";

interface RGKCardOneColumnProps {
  data?: CardOneColumDataType;
  href?: string;
  hrefText?: string;
  typeName: string;
  valueName: string;
  height?: number;
  style?: CSSProperties;
  color?: string;
}

const RGKCardOneColumn: FC<RGKCardOneColumnProps> = (props) => {
  return (
    <RGKCard
      title={props.data?.title}
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
        <span className={styles.RGKCardOneColumn_Text1}>
          {props.data?.subTitleName}
        </span>
        <span className={styles.RGKCardOneColumn_Text2}>
          {props.data?.subTitleValue}
        </span>
        <RGKOneColumn
          color={props.color}
          data={props.data?.data}
          dataPos="middle"
          valueName={props.valueName}
          typeName={props.typeName}
          height={props.height}
        />
      </div>
    </RGKCard>
  );
};

export default RGKCardOneColumn;
