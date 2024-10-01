"use client";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
import Input from "../IU/Input/Input";
import Button from "../IU/Button/Button"; 
import Spinner from "../Spiner/Spiner";

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  padding: 5px;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 15px auto;
  font-family: "Prompt", sans-serif;

  &:hover {
    background-color: #333;
  }
`;

const StyledLink = styled(Link)`
  font-weight: 900;
  color: #000;
  text-decoration: none;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const LoadingMessage = styled.p`
  font-size: 16px;
  color: #333;
`;

const LoginForm = () => {
  const router = useRouter();
  const { status, data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log({ status: status, session });
    if (status === "authenticated") {
      router.push("/posts");
    }
  }, [status, session]);

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log({ result });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      {status === "loading" && <Spinner/>}

      {status === "unauthenticated" && (
        <FormContainer>
          <Title>Login</Title>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <div>
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password:</Label>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <StyledButton type={"submit"} label={"Sign In"} />
            <p>
              Don't have an account? <StyledLink href="/register">Register</StyledLink>
            </p>
          </form>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormContainer>
      )}
    </div>
  );
};

export default LoginForm;
