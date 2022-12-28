import Nav from "../components/nav/nav";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
      <div> 
        <Nav/>
        <Outlet/>
        <Footer/>
      </div>
  );
}

export default App;
