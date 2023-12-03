import { defineStore } from "pinia";

export const useStore = defineStore("taskStore", {
  state: () => ({
    showCard: false,
    openLoader: false,
    hotel: {},
  }),
  actions: {
    loggedIn() {
      this.showCard = true;
    },
    loggedOut() {
      this.showCard = false;
    },
    updateLoader() {
      this.openLoader = !this.openLoader;
    },
    addHotel(hotel) {
      this.hotel = hotel;
    },
  },
});
