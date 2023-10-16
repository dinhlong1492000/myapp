import "./App.css";
import "./styles/app.sass";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/Page";
import Home from "./screens/Home";
import EditVideo from "./screens/EditPage";
import Payment from "./screens/Payment";
import { withTranslation, Trans } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 3,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Page>
                  <Home />
                </Page>
              }
            ></Route>
            <Route
              exact
              path="/edit-video"
              element={
                <Page>
                  <EditVideo />
                </Page>
              }
            ></Route>
            <Route
              exact
              path="/payment"
              element={
                <Page>
                  <Payment />
                </Page>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default withTranslation("common")(App);
