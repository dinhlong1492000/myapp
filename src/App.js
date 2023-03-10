import "./App.css";
import "./styles/app.sass";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/Page";
import Home from "./screens/Home";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
