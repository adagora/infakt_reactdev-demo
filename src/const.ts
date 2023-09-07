export const MEDIA = {
  tinyScreen: "300px",
  smallScreen: "600px",
  get tinyDown(): string {
    return `only screen and (max-width : ${this.tinyScreen})`;
  },
  get mobile(): string {
    return `only screen and (max-width : ${this.smallScreen})`;
  },
};

export const secondInMilliseconds = 1000;
export const minuteInMilliseconds = secondInMilliseconds * 60;
export const hourInMilliseconds = minuteInMilliseconds * 60;

export const API_BASE_URL = "https://randomuser.me/api";
