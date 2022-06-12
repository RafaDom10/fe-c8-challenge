import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 29px;
  padding-bottom: 60px;
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  grid-column-gap: 60px;
  grid-row-gap: 70px;
`;

export const MainCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
  padding-top: 60px;

  p {
    font-weight: 500;
    font-size: 28px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Button = styled.button`
  font-size: 17px;
  padding: 0.5em 2em;
  border: transparent;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
  background: #7646c4;
  color: white;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: rgb(2,0,36);
    background: linear-gradient(90deg, #5B17C4 0%, #2D0C5E 100%);
  } 

  &:active {
    transform: translate(0em, 0.2em);
  }

  &:disabled {
    cursor: not-allowed;
    background: #cccc;
  }

`;

export const ButtonPagination = ({ disabled, label }) => {
  return <Button disabled={disabled}>{label}</Button>;
}