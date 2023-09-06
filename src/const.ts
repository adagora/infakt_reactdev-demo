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
