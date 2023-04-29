import PropTypes from 'prop-types';
import { Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
