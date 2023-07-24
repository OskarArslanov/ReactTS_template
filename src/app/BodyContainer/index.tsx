import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const BodyContainer: FC<PropsWithChildren> = (props) => {
  return <div className={styles.BodyContainer}>{props.children}</div>;
};
export default BodyContainer;
