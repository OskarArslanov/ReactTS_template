import { makeAutoObservable, configure } from "mobx";
import { axiosInstance } from "./axiosConfig";

configure({
  enforceActions: "never",
});

class DashboardStoreObservable {
  smallCards: any[] = [];

  largeCards: any[] = [];

  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchData = async () => {
    this.loading = true;
    try {
      const data = (await axiosInstance.get("/rgk24/main")).data;
      this.largeCards = Object.values(data.big_cards);
      this.smallCards = Object.values(data.cards);
    } catch (err: any) {
      console.log(err);
    } finally {
      this.loading = false;
    }
  };
}

export const dashboardStore = new DashboardStoreObservable();
