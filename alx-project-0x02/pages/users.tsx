import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import { UsersPageProps } from "@/interfaces";

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="bg-white">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
