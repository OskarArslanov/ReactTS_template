import { getDataForReport } from "@utils/dataFromBackendFormatters";
import { axiosInstance } from "axiosConfig";
import { addMinutes } from "date-fns";
import isAfter from "date-fns/isAfter";
import { RGKTableTitleType } from "dto/card";
import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: "never",
});

const updatePeriod = 2;
class ReportsStoreObservable {
  reports: { name: string; data: any }[] = [];

  report: {
    columns: RGKTableTitleType[];
    data: any[];
  } = { columns: [], data: [] };

  loading: boolean = false;

  lastUpdate?: Date = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  fetchAvailableReports = async () => {
    this.loading = true;
    const isUpdate =
      this.lastUpdate === undefined ||
      isAfter(new Date(), addMinutes(this.lastUpdate, updatePeriod));
    try {
      if (isUpdate) {
        const response = await axiosInstance.get("/rgk24/fuel");
        const data = response.data.reports;
        Object.keys(data).map((item) =>
          this.reports.push({ name: item, data: data[item] })
        );
        this.lastUpdate = new Date();
      }
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
