import { useState, useEffect } from "react";
import './App.css'
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import DefaultContacts from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsInStorage = localStorage.getItem("contacts");
    return contactsInStorage ? JSON.parse(contactsInStorage) : DefaultContacts;
  });
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

   const onAddContact = (newContact) => {
    setContacts((oldContacts) => {
      return [...oldContacts, newContact];
    });
  };

   function onDeleteContact(contactId) {
    setContacts((oldContacts) => { return oldContacts.filter((contact) => contact.id !== contactId); })
  };

    const [filter, setFilter] = useState("");

  const findContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
   
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact}/> 
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={findContacts}  deleteContact={onDeleteContact} />
</div>
  )
}

export default App