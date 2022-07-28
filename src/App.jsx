import "./css/styles.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Cards from "./components/cards";
import Tasks from "./components/tasks";
import Transactions from "./components/transactions";

const App = () => {
  return (
    <div className="row p-0 m-0">
      <Sidebar />
      <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10 col-12 p-0">
        <Header />
        <Cards />
        <Tasks />
        <Transactions />
      </div>
    </div>
  );
};

export default App;
