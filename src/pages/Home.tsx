import { useState } from "react";
import { ContentPage } from "../components/Layout/PageWrapper.styled";
import { ViewForm } from "../components/ViewWidget/ViewForm";
import { usePaginatedListAccounts } from "../services/AccountsService";

const Home: React.FC = (): JSX.Element => {
  const [moreResults, setMoreResults] = useState<{
    page: number;
    results: number;
  }>({
    page: 1,
    results: 4,
  });

  const { data, isLoading, isError } = usePaginatedListAccounts({
    page: moreResults.page,
    results: moreResults.results,
  });

  if (isError) return <h1>Something went wrong</h1>;

  const handleClick = () => {
    setMoreResults((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
      results: prevState.results + 4,
    }));
  };

  return (
    <ContentPage>
      <>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.results.map((item) => <ViewForm {...item} />)
        )}
        {data && data.results.length === 0 && <h1>No results found</h1>}
        {isLoading ? null : (
          <button onClick={handleClick} disabled={isLoading}>
            Load more
          </button>
        )}
      </>
    </ContentPage>
  );
};

export default Home;
