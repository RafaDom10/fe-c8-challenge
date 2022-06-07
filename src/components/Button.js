import styled from 'styled-components';

export const Button = styled.button`
  width: fit-content;
  padding: 8px 16px ;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 16px;
  font-weight: 500;
  color: #323232;
  background: #fff;
  border-radius: 4px;
  transition: background 0.2s ease-in;
  
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;