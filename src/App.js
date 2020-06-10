import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import FetchData from "./pages/FetchData";
import ToDo from "./pages/ToDo";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="ui grid maingrid">
        <BrowserRouter>
          <div className="four wide column column-left">
            <Nav />
          </div>

          <div className="twelve wide column column-right">
            <Route exact path="/" component={Home} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/fetchData" component={FetchData} />
            <Route exact path="/todo" component={ToDo} />
          </div>

        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
