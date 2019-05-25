import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "redux";

import "./styles.css";
import ViewScreen from "./screens/ViewScreen";
// import ProductList from "./components/ProductList";

function App() {
  return (
    <React.Fragment>
      <ViewScreen />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
