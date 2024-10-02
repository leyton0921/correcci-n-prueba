import { Post } from "@/interface/interfaces";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";
import Button from "../IU/Button/Button";
import Input from "../IU/Input/Input";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Textarea from "../IU/Textarea/Textarea";

interface User {
  id: number;
  name: string;
}

const CardForm = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editPostData, setEditPostData] = useState({ title: '', description: '', user_id: 1 });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://simuate-test-backend-1.onrender.com/api/posts');
      const data = await response.json();
      if (data.posts) {
        setPosts(data.posts);
      }
    };

    const fetchUsers = async () => {
      const response = await fetch('https://simuate-test-backend-1.onrender.com/api/users');
      const data = await response.json();
      if (data.users) {
        setUsers(data.users);
      }
    };

    fetchPosts();
    fetchUsers();
  }, []);

  const getUserNameById = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  const handleEdit = (post: Post) => {
    setIsEditing(post.id);
    setEditPostData({ title: post.title, description: post.description, user_id: post.user_id });
    setShowModal(true); // Show the modal
  };

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (isEditing !== null) {
      try {
        const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/posts/${isEditing}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: editPostData.title,
            description: editPostData.description,
            user_id: editPostData.user_id, // Include user_id as part of the body
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // Update the post in the state
          setPosts(posts.map((post) => (post.id === isEditing ? { ...post, ...editPostData } : post)));
          setShowModal(false); // Close the modal
        } else {
          console.error('Failed to update the post:', data.message);
        }
      } catch (error) {
        console.error('Error while updating the post:', error);
      }
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/posts/${postId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        console.error('Failed to delete the post');
      }
    } catch (error) {
      console.error('Error while deleting the post:', error);
    }
  };

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Card key={post.id}>
            <div>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <Author>Written by: {getUserNameById(post.user_id)}</Author>
            </div>
            <Actions>
              <EditButton
                label={<GrEdit size={24} />}
                onClick={() => handleEdit(post)}
              />
              <DeleteButton
                label={<RiDeleteBinLine size={24} />}
                onClick={() => handleDelete(post.id)}
              />
            </Actions>
          </Card>
        ))
      ) : (
        <p>No posts available.</p>
      )}

      {/* Edit Modal */}
      {showModal && (
        <Modal>
          <ModalContent>
          <CancelButton onClick={() => setShowModal(false)} label={<IoIosCloseCircleOutline size={30}/>} />
            <h3>Edit Post</h3>
            <Form onSubmit={handleEditSubmit}>
              <Input
                type="text"
                placeholder="Title"
                value={editPostData.title}
                onChange={(e) => setEditPostData({ ...editPostData, title: e.target.value })}
                required
              />
              <Textarea
                placeholder="Description"
                value={editPostData.description}
                onChange={(e) => setEditPostData({ ...editPostData, description: e.target.value })}
                required
              />
              <StyledButton type="submit" label="Save Changes" />
            
            </Form>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

// Styled components
const Card = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 16px;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Title = styled.h5`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Author = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 8px;
`;

const Actions = styled.div`
  display: flex;
  gap: 8px;
`;

const EditButton = styled(Button)`
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #ff4d4d;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #ff1a1a;
  }
`;

// Modal styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledButton = styled(Button)`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  border: none;

  &:hover{
    cursor: pointer;
  }
`;

const CancelButton = styled(Button)`
  background: none;
  color: #000;
  border: none;

  &:hover{
    cursor: pointer;
  }
`;

export default CardForm;
