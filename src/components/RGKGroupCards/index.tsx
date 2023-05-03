import { FC } from "react";
import styles from "./styles.module.css";

interface RGKGroupCardsProps {
  smallCards: React.ReactNode[];
  bigCard: React.ReactNode;
}
const RGKGroupCards: FC<RGKGroupCardsProps> = (props) => {
  return (
    <div className={styles.RGKGroupCards}>
      <div className={styles.RGKGroupCards_SmallCards}>{props.smallCards}</div>
      {props.bigCard}
    </div>
  );
};

export default RGKGroupCards;
