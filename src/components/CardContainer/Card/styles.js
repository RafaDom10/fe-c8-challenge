import styled from 'styled-components';

export const Container = styled.div`
  width: 176px;
  height: 320px;
  border-radius: 4px;

  img {
    width: 176px;
    height: 264px;
    border-radius: 4px;
    cursor: pointer;
  }

  div {

    padding-left: 8px;

    p {
      font-weight: 500;
      line-height: 24px;
    }
  
    .poster-name {
      font-size: 16px;
    } 

    .poster-date {
      font-size: 14px;
    } 
  }

  
`;