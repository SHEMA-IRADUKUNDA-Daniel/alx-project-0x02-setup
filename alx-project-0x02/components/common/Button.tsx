import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  return (
    <div className="flex justify-center gap">
      <button className=" medium rounded-md py-5 px-10 mx-5 my-20 bg-blue-500">
        Button1
      </button>
      <button className="large rounded-full py-5 px-10 mx-5 my-20  bg-red-500">
        Button2
      </button>
    </div>
  );
};

export default Button;
