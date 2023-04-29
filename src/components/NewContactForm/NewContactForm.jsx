import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  ContactForm,
  Label,
  Input,
  FormError,
  Button,
} from './NewContactForm.styled';

const nameRegex =
  /^[a-zA-Zа-яґєіїА-ЯҐЄІЇ]+(([' -][a-zA-Zа-яґєіїА-ЯҐЄІЇ ])?[a-zA-Zа-яґєіїА-ЯҐЄІЇ]*)*$/;
const nameWarningMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
const numberWarningMessage =
  'Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegex, nameWarningMessage)
    .required('Please add name'),
  number: yup
    .string()
    .matches(numberRegex, numberWarningMessage)
    .required('Please add number'),
});

const NewContactForm = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const isSuccesfullyAdded = addContact(values);
    if (isSuccesfullyAdded) resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ContactForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <FormError name="name" component="div" />
        </Label>

        <Label>
          Number
          <Input type="tel" name="number" />
          <FormError name="number" component="div" />
        </Label>

        <Button type="submit">Add contact</Button>
      </ContactForm>
    </Formik>
  );
};

NewContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default NewContactForm;
