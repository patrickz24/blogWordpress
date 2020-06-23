import React from "react";
import Nav from './compenents/Nav';
import Header from './compenents/Header';
import Footer from './compenents/Footer';

import Routes from './compenents/Routes';


import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

