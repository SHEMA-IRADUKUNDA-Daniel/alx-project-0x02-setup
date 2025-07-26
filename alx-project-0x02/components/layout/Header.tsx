import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row items-center justify-center">
      <div className="w-32 h-auto relative">
        <nav className="space-x-6 font-semibold text-blue-600">
          <Link href="/home" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="/user" className="hover:underline">
            Users
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
