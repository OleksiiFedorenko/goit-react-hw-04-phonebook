import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 15px;

  padding: 10px;

  width: 400px;

  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;

  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  padding: 4px 6px;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 4px;
  &:focus {
    outline: 1px solid #1d65b8;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom right, #4782ef, #5ad0ff);
  border: 0;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(71, 110, 239, 0.5),
      0.125rem 0.125rem 1rem rgba(90, 208, 255, 0.5);
  }

  &:active {
    background: linear-gradient(to bottom right, #5ad0ff, #4782ef);
  }
`;

export const FormError = styled(ErrorMessage)`
  color: #ec3434;
  font-size: 16px;
  font-weight: 400;
`;
