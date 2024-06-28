import { useState, useEffect } from "react";
import initialContacts from "./contacts.json";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const initialContactsJSON = JSON.stringify(initialContacts);
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (searchValue) => {
    setFilter(searchValue.toLowerCase());
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  // const resetContacts = () => {
  //   setContacts(JSON.parse(initialContactsJSON));
  //   setFilter("");
  // };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <SearchBox value={filter} onChange={handleSearch} />
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        {/* <button onClick={resetContacts}>Reset Contacts</button> */}
      </div>
    </>
  );
}

export default App;
