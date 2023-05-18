import { getDataForReport } from "@utils/dataFromBackendFormatters";
import { makeAutoObservable, configure } from "mobx";
import { RGKTableTitleType } from "@dto/card";
import { axiosInstance } from "./axiosConfig";

configure({
  enforceActions: "never",
});

class ReportsStoreObservable {
  reports: { name: string; data: any }[] = [];

  report: {
    columns: RGKTableTitleType[];
    data: any[];
  } = { columns: [], data: [] };

  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAvailableReports = async () => {
    this.loading = true;
    try {
      const response = await axiosInstance.get("/rgk24/fuel");
      const data = response.data.reports;
      Object.keys(data).map((item) =>
        this.reports.push({ name: item, data: data[item] })
      );
    } catch (err: any) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  };

  fetchReport = async (request?: { report_title?: string; data?: any }) => {
    this.loading = true;
    try {
      if (request?.data && request.report_title) {
        const response = await axiosInstance.post("/get_fuel_rep", request);
        const report = getDataForReport(response.data);
        this.report = report;
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  };
}

export const reportsStore = new ReportsStoreObservable();
