import { CSSProperties, FC } from "react";
import RGKCard from "@components/RGKCard";
import { CardTwoColumDataType, TwoColumnValueType } from "@dto/card";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";
import RGKTwoColumn from "..";

interface RGKCardTwoColumnProps {
  data?: CardTwoColumDataType;
  href?: string;
  hrefText?: string;
  height?: number;
  style?: CSSProperties;
  colors?: string[];
}

const RGKCardTwoColumn: FC<RGKCardTwoColumnProps> = observer((props) => {
  const data = props.data?.data;
  const names: string[] = [];
  const title = props.data?.title;
  data?.forEach((item) => {
    if (!names.includes(item.name)) names.push(item.name);
  });
  const lastElements: TwoColumnValueType[] = [];
  names.forEach((item) => {
    const element = data?.findLast((el) => el.name === item);
    if (element) lastElements.push(element);
  });

  return (
    <RGKCard
      className={styles.RGKCardTwoColumn}
      title={title}
      href={props.href}
      hrefText={props.hrefText}
      style={props.style}
    >
      <div className={styles.RGKCardTwoColumn_DataValues}>
        {lastElements.map((item) => (
          <div
            className={styles.RGKCardTwoColumn_DataValues_Container}
            key={item.name}
          >
            <span className={styles.RGKCardTwoColumn_Text1}>{item.name}</span>
            <span className={styles.RGKCardTwoColumn_Text2}>
              {Number(item.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
      <RGKTwoColumn
        data={data}
        height={props.height}
        colors={props.colors}
        title={title}
      />
    </RGKCard>
  );
});

export default RGKCardTwoColumn;
