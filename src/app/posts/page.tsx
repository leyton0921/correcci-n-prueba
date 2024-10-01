'use client';
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Post } from "@/interface/interfaces";
import NavBar from "@/components/Nav/Nav";
import Button from "@/components/IU/Button/Button";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import PostForm from "@/components/CreatePostForm/CreatePost";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CartForm from "@/components/CartsForm/CartForm";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  justify-content: center;
  color: #c5c2c2;

  &:hover {
    background: #e0e0e074;
    cursor: pointer;
  }


`;

const ButtonStyled = styled(Button)`
  background: none;
  border: none;
  font-size: 16px;
  font-family: "Prompt", sans-serif;
  text-align: center;
  color: #c5c2c2;

  &:hover {
    cursor: pointer;
  }

  &.close{
    background: none;
    color: black;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; 
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999; 
`;

export default function HomePosts() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePostCreated = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
    handleCloseModal();
  };

  const userId = session?.user.id ? Number(session.user.id) : undefined; 

  return (
    <Main>
      <NavBar />
      <Container onClick={handleOpenModal}>
        <IoIosAddCircleOutline />
        <ButtonStyled label={`Deseas publicar algo nuevo, ${session?.user.name}?`} />
      </Container>

      {isModalOpen && (
        <>
          <Overlay onClick={handleCloseModal} />
          <Modal>
          <ButtonStyled onClick={handleCloseModal} label={<IoIosCloseCircleOutline size={30}/>} className="close" />
            <h2>Crear Nueva Publicación</h2>
            {userId !== undefined ? (
              <PostForm onPostCreated={handlePostCreated} userId={userId} />
            ) : (
              <p>Error: No se pudo obtener el ID de usuario.</p>
            )}
          </Modal>
        </>
      )}

      {status === "authenticated" && (
        <div>
          <CartForm/>
        </div>
      )}
    </Main>
  );
}
