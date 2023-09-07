export const MEDIA = {
  tinyScreen: "300px",
  smallScreen: "600px",
  mediumScreen: "900px",
  largeScreen: "1200px",
  get tinyDown(): string {
    return `only screen and (max-width: ${this.tinyScreen})`;
  },
  get mobile(): string {
    return `only screen and (max-width: ${this.smallScreen})`;
  },
  get tablet(): string {
    return `only screen and (min-width: ${this.smallScreen}) and (max-width: ${this.mediumScreen})`;
  },
  get desktop(): string {
    return `only screen and (min-width: ${this.largeScreen})`;
  },
};

export const secondInMilliseconds = 1000;
export const minuteInMilliseconds = secondInMilliseconds * 60;
export const hourInMilliseconds = minuteInMilliseconds * 60;

export const API_BASE_URL = "https://randomuser.me/api";
