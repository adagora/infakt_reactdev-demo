import { AccountantResponseType } from "../../components/ViewWidget/@types/AccountantResponseType";

export type ResultsResponseType = Pick<
  AccountantResponseType["info"],
  "results"
>;
