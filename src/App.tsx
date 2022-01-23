import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import persistStore from "redux-persist/lib/persistStore";

const persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
