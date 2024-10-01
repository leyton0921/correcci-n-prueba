"use client";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import styled from "styled-components";

const StyledLink = styled(Link)`
padding: 10px;
  text-decoration: none;
  color: black;

`;

export default function RegisterPage() {
    return (
        <div>

            <StyledLink href="/">
                <IoHomeOutline size={30} />
            </StyledLink>
            <RegisterForm />
        </div>
    );
}
