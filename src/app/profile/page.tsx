'use client';
import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NavBar from "@/components/Nav/Nav";
import Spinner from "@/components/Spiner/Spiner";
import { CiUser } from "react-icons/ci";
import Button from "@/components/IU/Button/Button";
import Input from "@/components/IU/Input/Input";
import PostsUser from "@/components/PostsOnlyPerson/PostsPerson";

export interface Post {
  id: number;
  title: string;
  description: string;
  user_id: number;
}

const ProfileContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
  border-right: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #e1e1e1;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: #000;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  z-index: 1001;
  width: 400px;
`;

const ButtonStyled = styled(Button)`
  background-color: transparent;
  color: #333;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const PostContainer = styled.div`
  flex: 2;
  padding: 20px;
`;

const UserProfile: React.FC = () => {
  const { data: session, status } = useSession();
  const [editedUser, setEditedUser] = useState<{ id: string; name: string; email: string; password: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const router = useRouter(); 

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
    } else {
      setEditedUser({
        id: session.user.id || "",
        name: session.user.name || "", 
        email: session.user.email || "",
        password: "",
      });
    }
  }, [session, status, router]);

  const handleSaveProfile = async () => {
    if (!editedUser) return;

    if (!editedUser.name || !editedUser.email || !editedUser.password) {
      alert("Es necesario completar todos los campos: nombre, email y contraseña.");
      return;
    }

    const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: editedUser.name,
        email: editedUser.email,
        password: editedUser.password, 
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      handleCloseModal();
    } else {
      alert("Error al actualizar el perfil: " + data.message);
    }
  };

  const handleDeleteUser = async () => {
    if (!editedUser) return;

    const response = await fetch(`https://simuate-test-backend-1.onrender.com/api/users/${editedUser.id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      await signOut(); 
      router.push("/"); 
    } else {
      alert("Error al eliminar el usuario");
    }
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <NavBar />
      <ProfileContainer>
        <InfoContainer>
          <Avatar ><CiUser size={90} /></Avatar>
          <Title>{editedUser?.name}</Title>
          <p>{editedUser?.email}</p>
          <StyledButton onClick={handleOpenModal} label="Edit profile"/>
          <StyledButton onClick={handleDeleteUser} label="Delete user"/>
        </InfoContainer>

        {isModalOpen && (
          <>
            <Overlay onClick={handleCloseModal} />
            <Modal>
              <ButtonStyled onClick={handleCloseModal} label={<IoIosCloseCircleOutline size={30} />}/>
              <h2>Edit Profile Information</h2>
              <div>
                <strong>Name:</strong>
                <Input
                  type="text"
                  value={editedUser?.name || ""}
                  onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                />
              </div>
              <div>
                <strong>Email:</strong>
                <Input
                  type="email"
                  value={editedUser?.email || ""}
                  onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                />
              </div>
              <div>
                <strong>Password:</strong>
                <Input
                  type="password"
                  value={editedUser?.password || ""}
                  onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
                />
              </div>
              <StyledButton onClick={handleSaveProfile} label="Save changes"/>
            </Modal>
          </>
        )}

        <PostContainer>
          <h2>My Posts</h2>
          <PostsUser />
        </PostContainer>
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
