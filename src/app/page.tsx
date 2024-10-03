'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NavBar from "@/components/Nav/Nav";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/posts'); 
    }
  }, [status, router]);

  return (
    <div>
      <NavBar />
      <h1>Welcome to BlogPost</h1>
  
    
    </div>
  );
}
