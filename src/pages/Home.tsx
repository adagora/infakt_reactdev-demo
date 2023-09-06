import { ContentPage } from "../components/Layout/PageWrapper.styled";
import { ViewForm } from "../components/ViewWidget/ViewForm";
import { usePaginatedListAccounts } from "../services/AccountsService";
import { useNavigate } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const moreResults = 4;

  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching } =
    usePaginatedListAccounts({
      results: moreResults,
    });

  if (isError) return <h1>Something went wrong</h1>;

  const handleClickRedirect = () => {
    navigate("/ksiegowi");
  };

  return (
    <ContentPage>
      <>
        {isLoading ? (
          <h1>Loading...</h1>
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
        {data && data.pages.length === 0 && <h1>No results found</h1>}

        {hasNextPage ? (
          <button onClick={() => fetchNextPage()} disabled={isLoading}>
            {isFetching ? "Loading" : "Show more"}
          </button>
        ) : null}
      </>
    </ContentPage>
  );
};

export default Home;
