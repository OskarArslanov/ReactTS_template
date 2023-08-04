import { Column } from '@ant-design/plots';
import { FC, useState } from 'react';
import { TwoColumnValueType } from '@dto/card';
import RGKReportTableModal from '@components/RGKModals/RGKReportTableModal';
import { dashboardStore } from '@store/dashboardStore';
import { reportsStore } from '@store/reportsStore';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { addDays, addMonths, format } from 'date-fns';
import styles from './styles.module.css';

const months: Record<string, number> = {
  Янв: 1,
  Фев: 2,
  Март: 3,
  Апр: 4,
  Май: 5,
  Июнь: 6,
  Июль: 7,
  Авг: 8,
  Сен: 9,
  Окт: 10,
  Нояб: 11,
  Дек: 12,
};

interface RGKTwoColumnProps {
  dataPos?: 'left' | 'middle' | 'right';
  colors?: string[];
  data?: TwoColumnValueType[];
  marginRatio?: number;
  isBig?: boolean;
  height?: number;
  title?: string;
  clickableCols?: boolean;
}
const RGKTwoColumn: FC<RGKTwoColumnProps> = observer((props) => {
  const [modal, setModal] = useState<{ state: boolean; title: string }>({
    state: false,
    title: '',
  });
  const config = {
    data: props.data || [],
    isGroup: true,
    xField: 'type',
    yField: 'value',
    seriesField: 'name',
    color: props.colors,
    marginRatio: props.marginRatio || 0.1,
    label: {
      position: props.dataPos || 'middle',
      style: {
        fill: '#000000',
        opacity: 0,
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (data: any) => {
        return {
          name: `${data.name}`,
          value: `${data.value.toLocaleString()}`,
        };
      },
    },
  };

  const handlePlotClick = (event: any) => {
    if (!props.clickableCols) return;
    const date = event.data.data.type.split('.');

    const data = toJS(dashboardStore);
    const allCards = data.largeCards.concat(data.smallCards);
    const card = allCards.find((item) => item.title === props.title);

    const steps: string[] = [];
    event.view.filteredData.forEach((item: any) => {
      if (!steps.includes(item.type)) steps.push(item.type);
    });

    const month = event.data.data.type.includes('.')
      ? event.data.data.type.split('.')[0]
      : event.data.data.type;
    const monthId = months[month];

    let startDate: Date;
    let endDate: Date;
    if (monthId) {
      startDate = new Date(new Date().getFullYear(), monthId - 1, 1);
      // startDate = addMinutes(startDate, startDate.getTimezoneOffset() + 180);
      endDate = addMonths(startDate, 1);
    } else {
      startDate = new Date(new Date().getFullYear(), date[1] - 1, date[0]);
      // startDate = addMinutes(startDate, startDate.getTimezoneOffset() + 180);
      endDate = addDays(startDate, 1);
    }

    const endDateTS = endDate.getTime() / 1000;
    const startDateTS = startDate.getTime() / 1000;
    const request = {
      report_title: card?.button?.[1].report_title,
      data: { end_ts: endDateTS, start_ts: startDateTS },
    };
    reportsStore.fetchReport(request).then(() => {
      setModal({
        state: true,
        title: `за ${format(startDate, 'dd.MM')} - ${format(endDate, 'dd.MM')}`,
      });
    });
  };
  return (
    <div className={styles.RGKTwoColumn}>
      {props.data && (
        <>
          <Column
            {...config}
            height={props.height}
            onEvent={(chart, event) => {
              if (event.type === 'plot:click') {
                handlePlotClick(event);
              }
            }}
          />
          <RGKReportTableModal
            open={modal.state}
            onClose={() => setModal({ state: false, title: '' })}
            title={`${props.title} ${modal.title}`}
            columns={reportsStore.report.columns}
            rows={reportsStore.report.data}
          />
        </>
      )}
    </div>
  );
});
export default RGKTwoColumn;
