import React from "react";
import Jumbotron from "./components/Jumbotron";
import Searchbar from "./components/Searchbar";
import Employeeinfo from "./components/Employeeinfo";

function App() {
  return (
    <div className="container">
      <Jumbotron />
      <Searchbar/>
      <Employeeinfo />
    </div>
  );
}

export default App;
