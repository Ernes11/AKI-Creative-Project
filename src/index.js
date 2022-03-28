import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {

  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Event,
  JoinUs,
  Membership
} from "./components";

import Resource from './components/Resource';


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event" element={<Event />} />
      <Route path="/joinUs" element={<JoinUs />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/resource" element={<Resource/>} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
