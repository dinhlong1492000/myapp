import "./App.css";
import "./styles/app.sass";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/Page";
import Home from "./screens/Home";
// import EditVideo from "./screens/EditPage";
import Payment from "./screens/Payment";
import EditImagePage from "./screens/EditImagePage";
import SynthesisImage from "./screens/SynthesisImage";
import EditVideoPage from "./screens/EditVideoPage";
import { withTranslation, Trans } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslateComponent } from "./components/TranslateComponent";

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
          <TranslateComponent>
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
                path="/edit-image"
                element={
                  <Page>
                    <EditImagePage />
                  </Page>
                }
              ></Route>
              <Route
                exact
                path="/edit-backgroundImage"
                element={
                  <Page>
                    <SynthesisImage />
                  </Page>
                }
              ></Route>
              <Route
                exact
                path="/edit-video"
                element={
                  <Page>
                    <EditVideoPage />
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
          </TranslateComponent>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default withTranslation("common")(App);
