import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiRequest, NextApiResponse } from "next";

interface IUser {
  id: string;
  name: string;
  email: string;
  language: string;
}

const authenticateUser = async (email: string, password: string): Promise<IUser | null> => {
  try {
    const response = await fetch('https://simuate-test-backend-1.onrender.com/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const { user } = data;
      return { id: user.id, name: user.name, email: user.email, language: user.language };
    } else {
      throw new Error(data.message || "Invalid email or password");
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
};

const registerUser = async (name: string, email: string, password: string): Promise<IUser | null> => {
  try {
    const response = await fetch('https://simuate-test-backend-1.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      const { user } = data;
      return { id: user.id, name: user.name, email: user.email, language: user.language };
    } else {
      throw new Error(data.message || "Error registering user");
    }
  } catch (error) {
    console.error('Error registering user:', error);
    return null;
  }
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"email" | "password", string> | any) {
        console.log('Attempting to authenticate:', credentials);
        const user = await authenticateUser(credentials?.email, credentials?.password);
        if (user) {
          console.log('User authenticated successfully:', user);
          return user;
        } else {
          console.error('Authentication failed for:', credentials.email);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        // token.language = user.language;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.language = token.language as string;
      }
      return session;
    },
  },
  secret: 'd1FE7uWJJr0qkEK3MRtWbnj40Asoiplw6LSxetzPmRo=',
  debug: true,
  session: {
    strategy: "jwt",
  },
});

const registerHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const user = await registerUser(name, email, password);
    if (user) {
      res.status(201).json({ user });
    } else {
      res.status(400).json({ message: "Error registering user" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export { handler as GET, handler as POST, registerHandler as register };
