import { useInfiniteQuery } from "@tanstack/react-query";
import { AccountantResponseType } from "../components/ViewWidget/@types/AccountantResponseType";
import IResponseError from "./@types/IResponseError";
import axios, { AxiosRequestConfig } from "axios";

export type PageResponseType = Pick<AccountantResponseType["info"], "results">;

const API_BASE_URL = "https://randomuser.me/api";

/*
 * example link:  https://randomuser.me/api/?seed=abc&gender=female&page=1&results=5
 * @notice params results is hard coded for now, 4 results per page
 * TODO: add params seed, gender, female, and results
 * @dev implemented infinity scroll to load more data on button click
 */
const fetchUsers = async (options?: AxiosRequestConfig) => {
  const response = await axios.get(API_BASE_URL, options);
  return response.data;
};

export function usePaginatedListAccounts({ results }: PageResponseType) {
  return useInfiniteQuery<any, IResponseError, AccountantResponseType>(
    ["accounts"],
    () => fetchUsers({ params: { results } }),
    {
      getNextPageParam: (lastPage, allPages) => {
        // Return undefined when there are no more pages to fetch
        if (lastPage.results.length === 0) {
          return undefined;
        }
        // Increment the page number for the next request
        return allPages.length + 1;
      },
    }
  );
}
