import { CardProps } from "@/interfaces";
const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex  flex-col justify-center">
      <h2 className="text-xl font-semibold mb-2 text-center">{title}</h2>
      <p className="text-gray-700 text-center">{content}</p>
    </div>
  );
};

export default Card;
