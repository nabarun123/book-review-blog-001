import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardSection />
      <Footer />
    </div>
  );
}

export default App;
