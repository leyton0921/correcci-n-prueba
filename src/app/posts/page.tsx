'use client'
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePosts() {

  const router = useRouter();
  const { status, data: session } = useSession();

  useEffect(() => {
    console.log({ status: status, session })
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, session]);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
     // redirect to login
  };

  return (
    <div>
      <h3>posts</h3>
      {status === "authenticated" && (
        <div>
          <p>User Logged</p>
          <p>{session.user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>

      )}
    </div>
  );
}
