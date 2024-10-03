import Link from "next/link";
import styled from "styled-components";
import { useSession, signOut } from "next-auth/react";

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  border-bottom: 1px solid #a7a7a7;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-decoration: none;
  color: black;
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

  &.singOut{
    background-color: #000;
    color: #fff;
  }
`;

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <NavBarContainer>
      <Logo href="/">BlogPost</Logo>
      <NavLinks>
        {session ? (
          <>
            <span>{session.user.name}</span>
            <StyledLink href="/profile">Profile</StyledLink>
            <StyledLink href="#" onClick={() => signOut()} className="singOut">Log out</StyledLink>
          </>
        ) : (
          <>
            <StyledLink href="/login">sign in</StyledLink>
            <StyledLink href="/register" className="register">
              Sign up
            </StyledLink>
          </>
        )}
      </NavLinks>
    </NavBarContainer>
  );
};

export default NavBar;
