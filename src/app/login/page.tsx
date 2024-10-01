"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";

export default function LoginPage() {

  const router = useRouter();
  const { status, data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log({ status: status, session })
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

    console.log({ result })

    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/");
    }
  };




  return (
    <div>

      {status === "loading" && <p>Loading...</p>}



      {status === "unauthenticated" && (
        <div>
          <Link href="/"><IoHomeOutline /></Link>
          <h3>Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign</button>
            <Link href="/register">register</Link>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}
