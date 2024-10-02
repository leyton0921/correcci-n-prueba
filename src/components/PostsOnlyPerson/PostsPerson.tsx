import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import styled from "styled-components";
import { GrEdit } from "react-icons/gr"; // Asegúrate de tener estos iconos instalados
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";

// Definición de la interfaz Post
export interface Post {
  id: number;
  title: string;
  description: string;
  user_id: number;
}

// Componente PostsUser
const PostsUser = () => {
  const { data: session, status } = useSession();
  const [editedUser, setEditedUser] = useState<{ id: string; name: string; email: string; password: string } | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editPostData, setEditPostData] = useState<Post | null>(null);

  useEffect(() => {
    if (session) {
      setEditedUser({
        id: session.user.id || "",
        name: session.user.name || "",
        email: session.user.email || "",
        password: "",
      });

      const fetchPosts = async () => {
        try {
          const response = await fetch('https://simuate-test-backend-1.onrender.com/api/posts');
          const data = await response.json();
          if (data.posts) {
            const filteredPosts = data.posts.filter((post: Post) => post.user_id === Number(session.user.id));
            setUserPosts(filteredPosts);
            console.log("Posts del usuario:", filteredPosts);
          }
        } catch (error) {
          console.error("Error al obtener los posts:", error);
        }
      };

      fetchPosts();
    }
  }, [session]);

  const handleEdit = (post: Post) => {
    setEditPostData(post);
    setShowModal(true);
  };

  const handleDelete = async (postId: number) => {
    const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/posts/${postId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setUserPosts(userPosts.filter((post) => post.id !== postId));
      alert("Post eliminado con éxito.");
    } else {
      alert("Error al eliminar el post.");
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editPostData) return;

    const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/posts/${editPostData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editPostData),
    });

    if (response.ok) {
      const updatedPost = await response.json();
      setUserPosts(userPosts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
      alert("Post actualizado con éxito.");
      setShowModal(false);
    } else {
      alert("Error al actualizar el post.");
    }
  };

  return (
    <div>
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <Card key={post.id}>
            <div>
              <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <Author>Written by: {editedUser?.name}</Author>
            </div>
            <Actions>
              <EditButton onClick={() => handleEdit(post)}>
                <GrEdit size={24} />
              </EditButton>
              <DeleteButton onClick={() => handleDelete(post.id)}>
                <RiDeleteBinLine size={24} />
              </DeleteButton>
            </Actions>
          </Card>
        ))
      ) : (
        <p>No posts available.</p>
      )}

      {/* Edit Modal */}
      {showModal && editPostData && (
        <Modal>
          <ModalContent>
            <CancelButton onClick={() => setShowModal(false)}>
              <IoIosCloseCircleOutline size={30} />
            </CancelButton>
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
              <StyledButton type="submit">Save Changes</StyledButton>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

// Estilos
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

const EditButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const DeleteButton = styled.button`
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

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const CancelButton = styled.button`
  background: none;
  color: #000;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

export default PostsUser;
