import { FC } from "react";
import RGKCard from "..";
import RGKTwoColumn, { TwoColumnValueType } from "../../RGKTwoColumn";
import styles from "./styles.module.css";

interface RGKCardTwoColumnProps {
  title: string;
  data?: TwoColumnValueType[];
  href?: string;
  hrefText?: string;
}

const RGKCardTwoColumn: FC<RGKCardTwoColumnProps> = (props) => {
  const dataValues = props.data?.[props.data.length - 1].nameValue;
  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={props.title}
      href={props.href}
      hrefText={props.hrefText}
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
      <RGKTwoColumn data={props.data} />
    </RGKCard>
  );
};

export default RGKCardTwoColumn;
