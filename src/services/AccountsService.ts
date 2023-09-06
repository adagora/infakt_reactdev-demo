import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AccountantResponseType } from "../components/ViewWidget/@types/AccountantResponseType";
import IResponseError from "./@types/IResponseError";
import axios, { AxiosRequestConfig } from "axios";

export type PageResponseType = Pick<
  AccountantResponseType["info"],
  "page" | "results"
>;

const API_BASE_URL = "https://randomuser.me/api";

/*
 * example link:  https://randomuser.me/api/?seed=abc&gender=female&page=1&results=5
 * @notice params number is dynamic and can be changed
 * @notice params seed, gender, female, and results are hard coded for now
 * TODO: add params seed, gender, female, and results
 */
const fetchUsers = async (options?: AxiosRequestConfig) => {
  const response = await axios.get(API_BASE_URL, options);
  return response.data;
};

export function usePaginatedListAccounts({
  page,
  results,
}: PageResponseType): UseQueryResult<AccountantResponseType, IResponseError> {
  return useQuery<any, IResponseError, AccountantResponseType>(
    ["accounts", page],
    () => fetchUsers({ params: { page, results } }),
    {
      staleTime: 60000, // Set the staleTime to 60,000 milliseconds (1 minute)
    }
  );
}
