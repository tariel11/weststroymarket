import React from "react";
import ReactDOM from "react-dom/client";
import "tw-elements";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Provider store={store}>
            <App />
        </Provider>
    </>
);
