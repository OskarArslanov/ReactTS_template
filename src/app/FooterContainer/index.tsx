import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.css';

const FooterContainer: FC<PropsWithChildren> = (props) => {
  return <div className={styles.FooterContainer}>{props.children}</div>;
};
export default FooterContainer;
