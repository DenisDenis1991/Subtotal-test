import ReactDOM from "react-dom/client";
import React from "react"
import { Provider } from "react-redux"
import App from "./components/App.jsx"
import {store} from "./redux/store"
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)