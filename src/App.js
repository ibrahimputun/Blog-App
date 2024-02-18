import "./App.css";
import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { purple } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    primary: {
      main: purple["900"],


    },

  });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
