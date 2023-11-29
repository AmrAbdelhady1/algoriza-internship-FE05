import { defineStore } from "pinia";

export const useStore = defineStore("taskStore", {
  state: () => ({
    showCard: false,
    hotels: [],
  }),
  actions: {
    getHotels(data) {
      this.hotels = data;
    },
    loggedIn() {
      this.showCard = true;
    },
    async loggedOut() {
      this.showCard = false;
    },
  },
});
