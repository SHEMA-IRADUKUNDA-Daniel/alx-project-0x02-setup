import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
const HomePage = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white h-500">
      <Header />
      <div className="p-8 flex flex-col content-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Welcome to the Home Page
        </h1>

        <Card
          title="Hello from Home Page"
          content="Wake up to the sound of waves in this stunning oceanfront property."
        />

        <button
          onClick={() => setIsModalOpen(true)}
          className=" mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        <div className="mt-6 space-y-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {isModalOpen && (
          <PostModal
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleNewPost}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
