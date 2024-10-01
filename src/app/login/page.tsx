"use client";
import LoginForm from "@/components/LoginForm/LoginForm";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
padding: 10px;
  text-decoration: none;
  color: black;


`;
export default function LoginPage() {

  return (
    <div>
      <StyledLink href="/">
        <IoHomeOutline size={30} />
      </StyledLink>
      <LoginForm />

    </div>
  );
}
