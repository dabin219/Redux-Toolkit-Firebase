import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  );
}

export default App;
