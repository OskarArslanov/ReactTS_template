import { Spin } from 'antd';
import { FC } from 'react';
import styles from './styles.module.css';

interface RGKCircleLoaderProps {
  visible: boolean;
}
const RGKCircleLoader: FC<RGKCircleLoaderProps> = (props) => {
  if (!props.visible) return null;
  return (
    <div className={styles.RGKCircleLoader}>
      <Spin spinning={props.visible} delay={0} size="large" />
    </div>
  );
};
export default RGKCircleLoader;
