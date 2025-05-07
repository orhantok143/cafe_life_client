import { PostCard } from "./PostCard";
import profile1 from "../assets/images/profile_3.webp";
import profile2 from "../assets/images/profile_2.jpg";
import profile3 from "../assets/images/profile_1.jpg";

export function PostList() {
    const posts=[
        {
          id: 1,
          user: {
            name: "Kafe Yetkilisi",
            username: "yetkili123",
            avatar: profile1,
          },
          date: "3 saat önce",
          content: "Bugün kahvemiz taptaze! ☕ #günlük #kafe",
          image: profile2,
          likes: 42,
          comments: 7,
        },
        {
          id: 2,
          user: {
            name: "Kafe Yetkilisi",
            username: "yetkili123",
            avatar:profile3,
          },
          date: "Dün",
          content: "Yeni tatlı menümüz yayında! 🍰",
          image: null,
          likes: 21,
          comments: 3,
        },
      ]
    return (
      <div className=" bg-gray-900 min-h-screen">
      <div className="px-3 py-3 text-xl font-semibold">Gönderilerim</div>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }
  