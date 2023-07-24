import { FC } from 'react';
import { Select } from 'antd';
import { OneColumnValueType } from '@dto/card';
import RGKCard from '@components/RGKCard';
import { IdValue } from '@dto/idVal';
import styles from './styles.module.css';
import RGKOneColumn from '..';

interface RGKCardOneColumnSelectorProps {
  title: string;
  defaultValue1?: IdValue;
  defaultValue2?: IdValue;
  values1: IdValue[];
  values2: IdValue[];
  placeholder1: string;
  placeholder2: string;
  data?: OneColumnValueType[];
  href?: string;
  hrefText?: string;
  valueName: string;
  typeName: string;
  height?: number;
  color?: string;
}

const RGKCardOneColumnSelector: FC<RGKCardOneColumnSelectorProps> = (props) => {
  return (
    <RGKCard
      title={props.title}
      hrefText={props.hrefText}
      href={props.href}
      className={styles.RGKCardOneColumn}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          height: '100%',
        }}
      >
        <div className={styles.RGKCardOneColumn_Selectors}>
          <Select
            defaultValue={props.defaultValue1}
            placeholder={props.placeholder1}
            loading={!props.values1}
            options={props.values1}
          />
          <Select
            defaultValue={props.defaultValue2}
            placeholder={props.placeholder2}
            loading={!props.values2}
            options={props.values2}
          />
        </div>
        <RGKOneColumn
          color={props.color}
          data={props.data}
          typeName={props.typeName}
          dataPos="middle"
          valueName={props.valueName}
          height={props.height}
          title={props.title}
        />
      </div>
    </RGKCard>
  );
};

export default RGKCardOneColumnSelector;
