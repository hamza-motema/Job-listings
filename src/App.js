import "./App.css";
import "./App-mobile.css";
import React, { useState } from "react";
import JobsList from "./components/JobsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

const App = () => {
  const selectedFilters = {
    roles: [],
    levels: [],
    languages: [],
    tools: [],
  };
  const [selected, setSelected] = useState(selectedFilters);
  return (
    <div className="App">
      <Header
        selected={selected}
        setSelected={setSelected}
        selectedFilters={selectedFilters}
      />
      <JobsList data={data} selected={selected} setSelected={setSelected} />
      <Footer />
    </div>
  );
};

export default App;
