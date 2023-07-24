import { FC } from 'react';
import { Divider } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import styles from './styles.module.css';

interface RGKStatPeriodProps {
  planName: string;
  planValue: string;
  planNamePrev: string;
  planValuePrev: string;
}

const RGKStatPeriod: FC<RGKStatPeriodProps> = (props) => {
  const isPositive = props.planValue > props.planValuePrev;
  return (
    <div className={styles.RGKStatPeriod}>
      <div className={styles.RGKStatPeriod_Current}>
        <div className={styles.RGKStatPeriod_Text__secondary}>
          {props.planName}
        </div>
        <div
          className={`${styles.RGKStatPeriod_Value} ${
            styles[
              `RGKStatPeriod_Value__${isPositive ? 'positive' : 'negative'}`
            ]
          }`}
        >
          {props.planValue}
        </div>
      </div>
      <Divider />
      <div className={styles.RGKStatPeriod_Text__secondary}>
        {props.planNamePrev}
      </div>
      <div
        className={`${styles.RGKStatPeriod_Value} ${
          styles[`RGKStatPeriod_Value__${isPositive ? 'positive' : 'negative'}`]
        }`}
      >
        {isPositive ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
        {props.planValuePrev}
      </div>
    </div>
  );
};

export default RGKStatPeriod;
