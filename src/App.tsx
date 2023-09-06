import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};
