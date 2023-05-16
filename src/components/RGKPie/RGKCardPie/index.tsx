import { FC } from "react";
import RGKCard from "@components/RGKCard";
import RGKPie, { RGKPieType } from "..";
import styles from "./styles.module.css";

interface RGKCardPieProps {
  title: string;
  data: RGKPieType[];
}

const RGKCardPie: FC<RGKCardPieProps> = (props) => {
  return (
    <RGKCard title={props.title} className={styles.RGKCardPie}>
      <RGKPie data={props.data} />
    </RGKCard>
  );
};

export default RGKCardPie;
