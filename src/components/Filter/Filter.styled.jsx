import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 5px;

  font-size: 18px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 4px 6px;
  font-size: 14px;
  border: 1px solid grey;
  border-radius: 4px;
  &:focus {
    outline: 1px solid #1d65b8;
  }
`;
