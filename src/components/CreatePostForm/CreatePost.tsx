import React, { useState } from "react";
import { Post } from "@/interfaces"; // Ajusta la ruta según tu estructura de archivos

interface PostFormProps {
  onPostCreated: (post: Post) => void; 
  userId: number; 
}

const PostForm: React.FC<PostFormProps> = ({ onPostCreated, userId }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('https://simuate-test-backend-1.onrender.com/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, user_id: userId }),
    });

    const data = await response.json();
    if (response.ok) {
      const newPost: Post = { 
        id: data.post.id, 
        title: data.post.title,
        description: data.post.description,
        user_id: userId, 
      };
      onPostCreated(newPost);
      setTitle("");
      setDescription("");
    } else {
      console.error(data.message);
    }
  };

  return (
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
  );
};

export default PostForm;
