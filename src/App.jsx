
import React, { useState } from 'react';
import contactsData from "./contacts.json";
import "./App.css";

function App() {

 // Create a state variable for the first 5 contacts, useState returns the current state and a function that updates it (setContacts)

 const [contacts, setContacts] = useState(contactsData.slice(0, 5));

 return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over each contact in the state and create a table row for each */}

          {contacts.map((contact) => ( 

            <tr key={contact.id}>  {/* Key prop helps React identify which items have changed for efficient re-rendering */}
              <td><img src={contact.pictureUrl} alt={contact.name} style={{width: '50px'}}/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
