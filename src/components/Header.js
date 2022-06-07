import styled from 'styled-components';
import logo from '../assets/images/logo.png'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  width: 100%;
  background: #5C16C5;

  img {
    padding-left: 112px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="logo" />
    </StyledHeader>
  )
}

export default Header;