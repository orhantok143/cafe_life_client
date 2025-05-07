import React from "react";
import { FollowingList } from "../components/FollowingList";
import { Header } from "../components/Header";
import profile1 from "../assets/images/profile_3.webp";
import profile2 from "../assets/images/profile_2.jpg";
import profile3 from "../assets/images/profile_1.jpg";
import { useNavigate } from "react-router-dom";

export function ChatContainer() {
  const navigate = useNavigate();
  const navigateToChatProfile = () => {
    navigate("/chatprofile");
  }

    const myProfile = {
      name: "Sen",
      avatar: profile3,
      verified: false,
      active: true,
    };
  
    const following = [
      { id: 1, name: "Ayşe", avatar: profile1, active: true },
      { id: 2, name: "Mehmet", avatar:profile2, active: false },
    ];
    
    const nearby = [
      { id: 3, name: "Ali", avatar:profile2, active: true },
      { id: 4, name: "Zeynep", avatar:profile3, active: true },
    ];
  
    return (
      <div className="h-screen bg-gray-900">
            <>
            <Header user={myProfile} />
            <FollowingList followingUsers={following} nearbyUsers={nearby} onSelect={navigateToChatProfile} />
            </>
     
      </div>
    );
  }
  