import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navpills from "./components/Navpills";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import './App.css';
const App = () => (
  <Router>
    <div>
      <Navpills />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/about" component={About} /> */}
            <Route exact path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </div>
          <div className="col-sm-1">

          </div>
          <div className="col-sm-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
