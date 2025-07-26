// pages/posts.tsx

import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import React from "react";

import { type PostsPageProps } from "@/interfaces";

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl text-center text-black font-bold mb-4">
          Posts
        </h1>
        {posts.map((post) => (
          <PostCard key={post.userId} {...post} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
