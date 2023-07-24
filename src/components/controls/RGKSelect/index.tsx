import { Select } from 'antd';
import { CSSProperties, FC } from 'react';

export interface LabelValue {
  label: string;
  value: string;
}
interface RGKSelectProps {
  values?: LabelValue[];
  style?: CSSProperties;
  defaultValue?: LabelValue;
  value?: LabelValue;
  label?: string;
  required?: boolean;
  className?: string;
  onChange?: (data: string) => void;
}
const RGKSelect: FC<RGKSelectProps> = (props) => {
  return (
    <label>
      {props.label}
      {props.required && <span style={{ color: 'red' }}>*</span>}
      <Select
        defaultValue={props.defaultValue}
        value={props.value}
        options={props.values}
        style={props.style}
        bordered={false}
        onChange={(e) => props.onChange?.(String(e))}
        className={props.className}
      />
    </label>
  );
};

export default RGKSelect;
