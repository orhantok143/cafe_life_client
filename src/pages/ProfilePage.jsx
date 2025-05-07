import React from 'react'
import { Profile } from '../components/Profile'
import profile1 from "../assets/images/profile_3.webp";


const ProfilePage = () => {
      const user = { id: 1, name: "Ahmet", username:"ahmet.kamil", avatar: profile1, active: true }
        const onLogout = () => {
            console.log("Çıkış yapıldı")
        }
        const onEditProfile = () => {
            console.log("Profil düzenleme alanı açıldı")
        }

    
  return (
    <div>
        <Profile
        user={user}
        onLogout={onLogout}
        onEditProfile={onEditProfile}

        />
    </div>
  )
}

export default ProfilePage
