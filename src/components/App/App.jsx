import { useState, useEffect, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import Title from 'components/Title/Title';
import NewContactForm from 'components/NewContactForm/NewContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import NoContacts from 'components/NoContacts/NoContacts';

const LSKey = 'contact-list';
const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LSKey);
    return savedContacts ? JSON.parse(savedContacts) : initContacts;
  });
  const areAnyContacts = Boolean(contacts.length);

  const [filter, setFilter] = useState('');
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem(LSKey, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    if (contacts.some(contact => contact.name.toLowerCase() === normalizedName))
      return Notify.warning(`${name} is already in contacts.`);

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    Notify.success(`${name} is added to contacts.`);
    return true;
  };

  const deleteContact = (id, name) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);

    setContacts(updatedContacts);
    Notify.failure(`${name} was removed from contacts.`);
  };

  return (
    <Container>
      <Title mainTitle="Phonebook" />
      <NewContactForm addContact={addContact} />
      <Title title="Contacts" />
      <Filter filter={filter} onFilter={setFilter} />

      {areAnyContacts && filteredContacts.length ? (
        <ContactList contacts={filteredContacts} onDelete={deleteContact} />
      ) : (
        <NoContacts
          message={areAnyContacts ? `No contacts found` : `No contacts yet`}
        />
      )}
    </Container>
  );
};

export default App;
