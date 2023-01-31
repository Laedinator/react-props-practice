import React from "react";
import Card from "./Card.jsx";
import contacts from "../Contacts.js";

const arr = contacts;

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {arr.map(function (arr, index) {
        const id = index;
        const name = arr.name;
        const imgURL = arr.imgURL;
        const phone = arr.phone;
        const email = arr.email;
        return <Card name={name} imgURL={imgURL} phone={phone} email={email} key={id}/>;
      })}
    </div>
  );
}

export default App;
