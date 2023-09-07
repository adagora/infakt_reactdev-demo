import { ContentPage, ErrorBox } from "../components/Layout/PageWrapper.styled";
import { ViewForm } from "../components/ViewWidget/ViewForm";
import { ResultsResponseType } from "../services/@types/ResultsResponseType";
import { usePaginatedListAccounts } from "../services/AccountsService";
import { useNavigate } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const moreResults: ResultsResponseType = { results: 4 };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = usePaginatedListAccounts(moreResults);

  if (isError) {
    return (
      <ErrorBox>
        <h1>Something went wrong</h1>
        <button onClick={() => refetch()}>Try again</button>
      </ErrorBox>
    );
  }

  const handleClickRedirect = () => {
    navigate("/ksiegowi");
  };

  return (
    <ContentPage>
      <>
        {isLoading ? (
          <h1>Loading..</h1>
        ) : (
          data.pages &&
          data.pages.map((page) =>
            page.results.map((item) => (
              <ViewForm
                key={item.login.uuid}
                {...item}
                onClick={handleClickRedirect}
              />
            ))
          )
        )}
        {data && data.pages.length === 0 && <h1>No accounts found</h1>}

        {hasNextPage ? (
          <button onClick={() => fetchNextPage()} disabled={isLoading}>
            {isFetching ? "Loading.." : "Show more"}
          </button>
        ) : null}
      </>
    </ContentPage>
  );
};

export default Home;
