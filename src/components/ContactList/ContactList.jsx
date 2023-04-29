import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactsContainer } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsContainer>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ContactsContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
