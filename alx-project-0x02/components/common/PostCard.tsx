import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border text-black p-4 rounded shadow mb-4">
      <h2 className="text-xl black-black font-bold">{title}</h2>
      <p className="text-black mt-2">{content}</p>
      <p className="text-sm text-black mt-4">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
