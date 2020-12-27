import React from "react";
import PersonDelete from "./PersonDelete";
import PersonList from "./PersonList";
import PersonPost from "./PersonPost";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Axios</h1>
      <h2>GET</h2>
      <h4>from - jsonplaceholder </h4>
      <PersonList />

      <br />
      <PersonPost />
      <br />
      <PersonDelete />
    </div>
  );
}
