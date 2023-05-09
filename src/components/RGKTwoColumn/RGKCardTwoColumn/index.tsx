import { CSSProperties, FC } from "react";
import styles from "./styles.module.css";
import RGKCard from "../../RGKCard";
import RGKTwoColumn, { TwoColumnValueType } from "..";

interface RGKCardTwoColumnProps {
  title: string;
  data?: TwoColumnValueType[];
  href?: string;
  hrefText?: string;
  height?: number;
  style?: CSSProperties;
  colors?: string[];
}

const RGKCardTwoColumn: FC<RGKCardTwoColumnProps> = (props) => {
  const dataValues = props.data?.[props.data.length - 1].nameValue;
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.title}
      href={props.href}
      hrefText={props.hrefText}
      style={props.style}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        <div className={styles.RGKCardTwoColumn_DataValues_Container}>
          <span className={styles.RGKCardTwoColumn_Text1}>
            {dataValues?.[0].name}
          </span>
          <span className={styles.RGKCardTwoColumn_Text2}>
            {dataValues?.[0].value}
          </span>
        </div>
        <div className={styles.RGKCardTwoColumn_DataValues_Container}>
          <span className={styles.RGKCardTwoColumn_Text1}>
            {dataValues?.[1].name}
          </span>
          <span className={styles.RGKCardTwoColumn_Text2}>
            {dataValues?.[1].value}
          </span>
        </div>
      </div>
      <RGKTwoColumn
        data={props.data}
        height={props.height}
        colors={props.colors}
      />
    </RGKCard>
  );
};

export default RGKCardTwoColumn;
