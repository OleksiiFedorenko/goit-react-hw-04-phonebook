import PropTypes from 'prop-types';
import { Message } from './NoContacts.styled';

const NoContacts = ({ message }) => {
  return <Message>{message}</Message>;
};

NoContacts.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoContacts;
