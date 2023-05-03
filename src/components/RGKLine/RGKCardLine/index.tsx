import { FC } from "react";
import RGKCard from "../../RGKCard";
import styles from "./styles.module.css";
import RGKLine, { RGKLineType } from "..";

interface RGKCardLineProps {
  title: string;
  data: RGKLineType[];
}

const RGKCardLine: FC<RGKCardLineProps> = (props) => {
  return (
    <RGKCard title={props.title} className={styles.RGKCardLine}>
      <RGKLine data={props.data} />
    </RGKCard>
  );
};

export default RGKCardLine;
