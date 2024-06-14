
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"; 

function App() {
  return (
    <>
<Navbar  title="textUtils"  aboutText="more info" />
<Alert Alert="WELCOME TO TEXTUTILS"/>
<div className="container my-5">
<TextForm header="ENTER THE TEXT TO ANALYZE "/>
</div>
</>
  );
}

export default App;
