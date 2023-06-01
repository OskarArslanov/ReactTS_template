import { useEffect, useState } from "react";
import RGKCircleLoader from "@components/RGKCircleLoader";
import RGKTable from "@components/RGKTable";
import RGKRangePicker from "@components/controls/RGKRangePicker";
import RGKSelect from "@components/controls/RGKSelect";
import { reportsStore } from "@store/reportsStore";
import { observer } from "mobx-react-lite";
import { addMinutes, format } from "date-fns";
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
    reportsStore.fetchReport(request);
  }, [request]);

  const offset = new Date().getTimezoneOffset() + 180;
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
        <RGKRangePicker
          tab={request?.report_title}
          onChange={(e) => {
            const startDay = format(new Date(e[0] * 1000), "yyyy-MM-dd");
            const endDay = format(new Date(e[1] * 1000), "yyyy-MM-dd");
            const startPeriod = addMinutes(new Date(startDay), offset);
            const endPeriod = addMinutes(new Date(endDay), offset + 24 * 60);
            const startPeriodTS = startPeriod.getTime() / 1000;
            const endPeriodTS = endPeriod.getTime() / 1000;
            const data = {
              ...request?.data,
              start_ts: startPeriodTS,
              end_ts: endPeriodTS,
            };
            const updatedRequest = { ...request, data };
            setRequest(updatedRequest);
          }}
        />
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
