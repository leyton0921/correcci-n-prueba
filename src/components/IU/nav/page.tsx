import Link from "next/link";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
border-bottom: 1px solid #a7a7a7;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: #000;
  padding: 8px 16px;
  border-radius: 4px;
  transition: color 0.3s ease;

  &:hover {
    background: #e6e4e48e;
  }

  &.register {
    background-color: #000;
    color: #fff;

  }
`;


const NavBar = () => {
    return (
        <NavBarContainer>
            <Logo>BlogPost</Logo>
            <NavLinks>
                <StyledLink href="/login">Iniciar sesión</StyledLink>
                <StyledLink href="/register" className="register">
                    Registrarse
                </StyledLink>
            </NavLinks>
        </NavBarContainer>
    );
};

export default NavBar;
