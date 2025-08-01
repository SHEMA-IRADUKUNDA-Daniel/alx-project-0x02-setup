import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage = () => {
  return (
    <div className="bg-white ">
      <Header />
      <div className="p-8 h-500 text-center]">
        <h1 className="text-3xl my-10 text-center font-bold text-black">
          About Us
        </h1>
        <Button size="medium" shape="rounded-md" />
      </div>
    </div>
  );
};

export default AboutPage;
