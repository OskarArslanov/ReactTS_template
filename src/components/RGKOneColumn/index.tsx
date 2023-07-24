import { Column } from "@ant-design/plots";
import { FC, useState } from "react";
import { OneColumnValueType } from "@dto/card";
import RGKReportTableModal from "@components/RGKModals/RGKReportTableModal";
import { dashboardStore } from "@store/dashboardStore";
import { toJS } from "mobx";
import { addDays, addMonths, format } from "date-fns";
import { reportsStore } from "@store/reportsStore";
import { observer } from "mobx-react-lite";
import styles from "./styles.module.css";

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

interface RGKOneColumnProps {
  dataPos?: "left" | "middle" | "right";
  data?: OneColumnValueType[];
  isBig?: boolean;
  height?: number;
  typeName: string;
  valueName: string;
  color?: string;
  onPlotClick?: () => void;
  title?: string;
}
const RGKOneColumn: FC<RGKOneColumnProps> = observer((props) => {
  const [modal, setModal] = useState<{ state: boolean; title: string }>({
    state: false,
    title: "",
  });
  const config = {
    data: props.data || [],
    xField: "type",
    yField: "value",
    color: props.color || "#57AEFE",
    label: {
      position: props.dataPos || "middle",
      style: {
        fill: "#000000",
        opacity: 0,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: props.typeName,
      },
      value: {
        alias: props.valueName,
      },
    },
    tooltip: {
      showTitle: false,
      formatter: (data: any) => {
        return {
          name: `${data.type}`,
          value: `${data.value.toLocaleString()}`,
        };
      },
    },
  };

  const handlePlotClick = (event: any) => {
    const date = event.data.data.type.split(".");

    const data = toJS(dashboardStore);
    const allCards = data.largeCards.concat(data.smallCards);
    const card = allCards.find((item) => item.title === props.title);

    const steps: string[] = [];
    event.view.filteredData.forEach((item: any) => {
      if (!steps.includes(item.type)) steps.push(item.type);
    });

    const month = event.data.data.type.includes(".")
      ? event.data.data.type.split(".")[0]
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
        title: `за ${format(startDate, "dd.MM")} - ${format(endDate, "dd.MM")}`,
      });
    });
  };

  return (
    <div className={styles.RGKOneColumn}>
      {props.data && (
        <>
          <Column
            {...config}
            height={props.height}
            onEvent={(chart, event) => {
              if (event.type === "plot:click") {
                handlePlotClick(event);
              }
            }}
          />
          <RGKReportTableModal
            open={modal.state}
            onClose={() => setModal({ state: false, title: "" })}
            title={`${props.title} ${modal.title}`}
            columns={reportsStore.report.columns}
            rows={reportsStore.report.data}
          />
        </>
      )}
    </div>
  );
});

export default RGKOneColumn;
