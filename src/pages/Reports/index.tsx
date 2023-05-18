import { useEffect, useState } from "react";
import RGKCircleLoader from "@components/RGKCircleLoader";
import RGKTable from "@components/RGKTable";
import RGKRangePicker from "@components/controls/RGKRangePicker";
import RGKSelect from "@components/controls/RGKSelect";
import { reportsStore } from "@store/reportsStore";
import { observer } from "mobx-react-lite";
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

  return (
    <div className={styles.Reports}>
      <RGKCircleLoader visible={reportsStore.loading} />
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
            const data = {
              ...request?.data,
              start_ts: e[0],
              end_ts: e[1],
            };
            const updatedRequest = { ...request, data };
            setRequest(updatedRequest);
          }}
        />
      </div>
      <RGKTable
        pagination
        columns={reportsStore.report?.columns}
        data={reportsStore.report?.data}
      />
    </div>
  );
});

export default Reports;
