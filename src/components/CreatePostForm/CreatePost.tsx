import React, { useState } from "react";
import { Post } from "@/interface/interfaces";
import Button from "../IU/Button/Button";
import Input from "../IU/Input/Input";
import Textarea from "../IU/Textarea/Textarea";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledButton = styled(Button)`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  transition: color 0.3s ease;
  font-size: 16px;
  border: none;
  font-family: "Prompt", sans-serif;
  margin: 0 auto;


  &:hover{
    cursor: pointer;
  }

`;
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
    <Form onSubmit={handleCreatePost}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <StyledButton
        type="submit"
        label="crear post"
      />
    </Form>
  );
};

export default PostForm;
