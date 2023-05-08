import { FC } from "react";
import { Divider } from "antd";
import styles from "./styles.module.css";
import RGKStatMain from "./RGKStatMain";
import RGKStatPeriod from "./RGKStatPeriod";
import RGKCard from "../RGKCard";

export interface RGKStatsType {
  actions?: React.ReactNode;
  title: string;
  value: string;
  planName: string;
  planValue: string;
  planNamePrev: string;
  planValuePrev: string;
}
interface RGKStatsProps {
  data?: RGKStatsType;
}
const RGKStats: FC<RGKStatsProps> = (props) => {
  if (!props.data) return null;
  return (
    <RGKCard className={styles.RGKStats}>
      <div className={styles.RGKStats_Content}>
        <RGKStatMain title={props.data.title} value={props.data.value} />
        <RGKStatPeriod
          planName={props.data.planName}
          planValue={props.data.planValue}
          planNamePrev={props.data.planNamePrev}
          planValuePrev={props.data.planValuePrev}
        />
      </div>
      {!!props.data.actions && <Divider />}
      <div className={styles.RGKStats_Controls}>{props.data.actions}</div>
    </RGKCard>
  );
};

export default RGKStats;
