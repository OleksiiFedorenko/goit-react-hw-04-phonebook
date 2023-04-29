import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 12px;
  background: linear-gradient(to bottom right, #ef474753, #ff975a53);
  border: 0;
  border-radius: 4px;
  color: #000;
  cursor: pointer;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  outline: transparent;
  padding: 0 0.75rem;
  text-align: center;
  transition: box-shadow 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    background: linear-gradient(to bottom right, #ef4747, #ff975a);
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 71, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 137, 90, 0.5);
  }

  &:active {
    color: #fff;
    background: linear-gradient(to bottom right, #ff975a, #ef4747);
  }
`;
