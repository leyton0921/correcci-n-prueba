'use client';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/interface/interfaces";

export default function HomePosts() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://simuate-test-backend-1.onrender.com/api/posts');
      const data = await response.json();
      if (data.posts) {
        setPosts(data.posts);
      }
    };

    fetchPosts();
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Verificar que session no sea null antes de acceder a sus propiedades
    if (!session) {
      console.error("No session found");
      return;
    }

    const response = await fetch('https://simuate-test-backend-1.onrender.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, user_id: session.user.id }), // Asegúrate de tener el user_id correcto
    });

    const data = await response.json();
    if (response.ok) {
      setPosts([...posts, data.post]);
      setTitle("");
      setDescription("");
    } else {
      console.error(data.message);
    }
  };

  return (
    <div>
      <h3>Posts</h3>
      {status === "authenticated" && (
        <div>
          <p>User Logged: {session.user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}

      <form onSubmit={handleCreatePost}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <button type="submit">Create Post</button>
      </form>

      <div>
        <h4>All Posts</h4>
        {posts.length > 0 ? (
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <p>User ID: {post.user_id}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
}
