import { useEffect, useState } from "react";
import { RGKTableTitleType } from "dto/card";
import RGKSelect from "../../components/controls/RGKSelect";
import RGKRangePicker from "../../components/controls/RGKRangePicker";
import styles from "./styles.module.css";
import { axiosInstance } from "../../axiosConfig";
import RGKTable from "../../components/RGKTable";
import RGKCircleLoader from "../../components/RGKCircleLoader";

const Reports = () => {
  const [availableReports, setAvailableReports] = useState<any>();
  const [selected, setSelected] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<{
    columns: RGKTableTitleType[];
    data: any[];
  }>();
  const [request, setRequest] = useState<{
    report_title?: string;
    data?: any;
  }>();

  useEffect(() => {
    axiosInstance.get("/rgk24/fuel").then((resp: any) => {
      const response = resp.data.reports;
      const reports: any[] = [];
      Object.keys(response).map((item) =>
        reports.push({ name: item, data: response[item] })
      );
      setAvailableReports(reports);
    });
  }, []);

  const handleChangeSelect = (e: string) => {
    setRequest({ ...request, report_title: e });
    setSelected(e);
  };
  const handleChangeDate = async (e: number[]) => {
    const data = {
      start_ts: e[0],
      end_ts: e[1],
    };
    setRequest({ ...request, data });
  };

  useEffect(() => {
    if (request?.report_title && request.data) {
      setLoading(true);
      try {
        axiosInstance.post("/get_fuel_rep", request).then((response) => {
          const data = response.data;
          const columns: RGKTableTitleType[] = data.column_name.map(
            (item: any) => ({
              title: item.column_name,
              dataIndex: item.key,
              key: item.key,
            })
          );
          const rows = data.report_data.map((item: any, index: number) => ({
            ...item,
            key: index,
          }));
          setReport({ columns, data: rows });
        });
      } catch (err: any) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  }, [request?.report_title, request?.data]);

  return (
    <div className={styles.Reports}>
      <RGKCircleLoader visible={loading} />
      <div className={styles.Reports_Controls}>
        <RGKSelect
          values={availableReports?.map((item: any) => ({
            label: item.name,
            value: item.name,
          }))}
          onChange={handleChangeSelect}
          className={styles.Reports_Selector}
        />
        <RGKRangePicker tab={selected} onChange={handleChangeDate} />
      </div>
      <RGKTable pagination columns={report?.columns} data={report?.data} />
    </div>
  );
};

export default Reports;
