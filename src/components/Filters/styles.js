import styled from 'styled-components';

export const FilterContainer = styled.div`
display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 449px;
  background: #2D0C5E;

  div {
    height: 284px;
    display: flex;
    flex-direction: column;
    
    h1 {
      text-align: center;
      color: #fff;
      font-weight: 500;
      font-size: 48px;
    }

    p {
      margin-top: 40px;
      text-align: center;
      color: #fff;
      font-weight: 400;
      font-size: 14px;
    }

    div {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 1033px;
      margin-top: 20px;
      gap: 8px;
    }
  }

`;