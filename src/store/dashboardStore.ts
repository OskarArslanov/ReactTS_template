import { axiosInstance } from "axiosConfig";
import { addMinutes } from "date-fns";
import isAfter from "date-fns/isAfter";
import { makeAutoObservable, configure } from "mobx";

configure({
  enforceActions: "never",
});

const updatePeriod = 2;
class DashboardStoreObservalble {
  smallCards: any[] = [];

  largeCards: any[] = [];

  loading: boolean = false;

  lastUpdate?: Date = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    this.loading = true;
    const isUpdate =
      this.lastUpdate === undefined ||
      isAfter(new Date(), addMinutes(this.lastUpdate, updatePeriod));
    try {
      if (isUpdate) {
        const data = (await axiosInstance.get("/rgk24/main")).data;
        this.largeCards = Object.values(data.big_cards);
        this.smallCards = Object.values(data.cards);
        this.lastUpdate = new Date();
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  };
}

export const dashboardStore = new DashboardStoreObservalble();
