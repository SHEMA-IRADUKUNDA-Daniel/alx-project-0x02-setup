import { type PostModalProps } from "@/interfaces";
import React, { useRef } from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const title = titleRef.current?.value.trim() || "";
    const content = contentRef.current?.value.trim() || "";

    if (title && content) {
      onSubmit(title, content);
      onClose(); // Close after submit
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Title</label>
            <input
              ref={titleRef}
              className="w-full px-3 py-2 border rounded"
              type="text"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Content</label>
            <textarea
              ref={contentRef}
              className="w-full px-3 py-2 border rounded"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
