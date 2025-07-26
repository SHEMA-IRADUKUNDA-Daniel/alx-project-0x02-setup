import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <Card
        title="Hello from Home Page"
        content="Wake up to the sound of waves in this stunning oceanfront property."
      ></Card>
    </div>
  );
};

export default HomePage;
