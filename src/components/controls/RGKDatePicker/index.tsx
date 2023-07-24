/* eslint-disable no-underscore-dangle */
import { DatePicker } from 'antd';
import { FC } from 'react';
import 'dayjs/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';

interface RGKRangePickerProps {
  tab?: any;
  onChange?: (date: number) => void;
  placeholder?: string;
}
const RGKDatePicker: FC<RGKRangePickerProps> = (props) => {
  let picker: 'year' | 'quarter' | 'month' | 'week' | 'time' | 'date' = 'date';
  let format = 'DD.MM.YYYY';
  const name = props.tab?.name;
  if (name) {
    if (name.includes('по неделям')) picker = 'week';
    if (name.includes('по месяцам')) {
      picker = 'month';
      format = 'MM.YYYY';
    }
    if (name.includes('по кварталам')) picker = 'quarter';
    if (name.includes('по годам')) {
      picker = 'year';
      format = 'YYYY';
    }
  }

  const handleChange = async (e: any) => {
    const date: Date = e?.$d;
    props.onChange?.(date.getTime());
  };

  return (
    <DatePicker
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      onChange={handleChange}
      picker={picker}
      locale={locale}
      format={format}
      placeholder={props.placeholder}
    />
  );
};

export default RGKDatePicker;
