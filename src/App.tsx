import { HashRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import GlobalStyles from "./styles/global";
import Ksiegowi from "./pages/Ksiegowi";

export const App = () => {
  return (
    <>
      <GlobalStyles />

      <Layout>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ksiegowi" element={<Ksiegowi />}></Route>
          </Routes>
        </HashRouter>
      </Layout>
    </>
  );
};
