import React from "react";
import ChatPage from "./ChatPage";
import profile1 from "../assets/images/profile_3.webp";

const Chat = () => {
  const selectedUser = { id: 1, name: "Ahmet", avatar: profile1, active: true };

  return <ChatPage user={selectedUser} />;
};

export default Chat;
