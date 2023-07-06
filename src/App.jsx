// import { useState } from 'react'
// import './App.css'
import { NavBar } from "./components/NavBar";
// import HomePage from './pages/HomePage'
import { MainRoutes } from "./routers/MainRouter";

function App() {
  return (
    <>
      <NavBar />
      <div className="container m-5 p-3">
        <MainRoutes />
      </div>
    </>
  );
}

export default App;
