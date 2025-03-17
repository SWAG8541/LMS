import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Store";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}> {/* Wrap with Redux */}
    <App />
  </Provider>
);

// Provider gives the whole app access to the library system (Redux store).