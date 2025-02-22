
import React, { useState } from 'react';
import contactsData from "./contacts.json";
import "./App.css";

function App() {

 // Create a state variable for the first 5 contacts, useState returns the current state and a function that updates it (setContacts)

 const [contacts, setContacts] = useState(contactsData.slice(0, 5));

 // Add Random Contact function

 const addRandomContact = () => {

// Filter out contacts that are already being displayed

  const remainingContacts = contactsData.filter(contact => 
    !contacts.find(c => c.id === contact.id));
    if (remainingContacts.length === 0) {
      alert("No more contacts to add.");
      return;
    }

// Select a random contact from the remaining contacts

 const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];


// Update the contacts state by adding the new random contact
// Use the spread operator to include the current contacts and add the new one
    setContacts([...contacts, randomContact]);
  };


// Sort by Name function

const sortByName = () => {
  const sortedContacts = [...contacts].sort((a, b) =>  // use spread operator to create copy prevents mutalating original state
  a.name.localeCompare(b.name));
  setContacts(sortedContacts);  // setContacts function is used to update the state with the new sorted array. This triggers a re-render of the component.
};

// Sort by Popularity function
const sortByPopularity = () => { 
  const sortedContacts = [...contacts].sort((a, b) => 
  b.popularity - a.popularity);  // sorts the contacts by popularity in descending order (highest first) by subtracting
  setContacts(sortedContacts);
};



// delete function 
const deleteContact = (id) => {
  const updatedContacts = contacts.filter(contact => 
    contact.id !== id); //shows the contact if the id does NOT match the id we're looking to delete
  setContacts(updatedContacts);
};



 return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <div className="flex justify-between py-5">
      <button   class="btn btn-outline btn-primary" onClick={addRandomContact}>Add Random Contact</button>
      <button   class="btn btn-outline btn-primary" onClick={sortByName}>Sort by Name</button>
      <button   class="btn btn-outline btn-primary" onClick={sortByPopularity}>Sort by Popularity</button>
      </div>


      <table className="table py-5">
        <thead>
          <tr>
            <th >Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th> 

          </tr>
        </thead>
        <tbody>
          {/* Map over each contact in the state and create a table row for each */}

          {contacts.map((contact) => ( 

            <tr key={contact.id}>  {/* Key prop helps React identify which items have changed for efficient re-rendering */}
              <td>
              <div class="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              
              <img src={contact.pictureUrl} alt={contact.name}/>
              
              </div>
              </div>
              
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🌟' : ''}</td>
             <td> <button className="btn btn-ghost btn-xs" onClick={() => deleteContact(contact.id)}>Delete</button></td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
