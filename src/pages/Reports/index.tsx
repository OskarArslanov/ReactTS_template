import { useEffect, useState } from "react";
import RGKCircleLoader from "@components/RGKCircleLoader";
import RGKTable from "@components/RGKTable";
import RGKDatePicker from "@components/controls/RGKDatePicker";
import RGKSelect from "@components/controls/RGKSelect";
import { reportsStore } from "@store/reportsStore";
import { observer } from "mobx-react-lite";
import { addMinutes, addSeconds, format } from "date-fns";
import styles from "./styles.module.css";

const Reports = observer(() => {
  const [request, setRequest] = useState<{
    report_title?: string;
    data?: any;
  }>();

  useEffect(() => {
    reportsStore.fetchAvailableReports();
  }, []);

  useEffect(() => {
    let isFetch = true;
    if (request?.data?.start_ts || request?.data?.end_ts) {
      isFetch = !!request.data.start_ts && !!request.data.end_ts;
    }
    if (isFetch) reportsStore.fetchReport(request);
  }, [request]);

  const offset = new Date().getTimezoneOffset();
  return (
    <div className={styles.Reports}>
      <div className={styles.Reports_Controls}>
        <RGKSelect
          values={reportsStore.reports?.map((item) => ({
            label: item.name,
            value: item.name,
          }))}
          onChange={(e) => {
            const updatedTitle = e;
            const updatedRequest = { ...request, report_title: updatedTitle };
            setRequest(updatedRequest);
          }}
          className={styles.Reports_Selector}
        />
        <div className={styles.Reports_Controls_DateRange}>
          <RGKDatePicker
            placeholder="Начало периода"
            tab={request?.report_title}
            onChange={(e) => {
              const startDay = format(new Date(e), "yyyy-MM-dd");
              const startPeriod = addMinutes(new Date(startDay), offset);
              const startPeriodTS = startPeriod.getTime() / 1000;
              const data = {
                ...request?.data,
                start_ts: startPeriodTS,
              };
              const updatedRequest = { ...request, data };
              setRequest(updatedRequest);
            }}
          />
          <RGKDatePicker
            placeholder="Конец периода"
            tab={request?.report_title}
            onChange={(e) => {
              const endDay = format(new Date(e), "yyyy-MM-dd");
              let endPeriod = addMinutes(new Date(endDay), 24 * 60 + offset);
              endPeriod = addSeconds(endPeriod, -1);
              const endPeriodTS = endPeriod.getTime() / 1000;
              const data = {
                ...request?.data,
                end_ts: endPeriodTS,
              };
              const updatedRequest = { ...request, data };
              setRequest(updatedRequest);
            }}
          />
        </div>
      </div>
      <RGKCircleLoader visible={reportsStore.loading} />
      <RGKTable
        pagination
        columns={reportsStore.report?.columns}
        data={reportsStore.report?.data}
        name={request?.report_title}
      />
    </div>
  );
});

export default Reports;
