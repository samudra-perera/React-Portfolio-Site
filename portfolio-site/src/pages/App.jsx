import Nav from "../components/nav/nav";
import Landing from '../components/landing/landing';
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
      <div> 
        <Nav/>
        <Outlet />
      </div>
  );
}

export default App;
