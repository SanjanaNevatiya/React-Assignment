import { useState } from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);
  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <div className="bg-white w-full max-w-[300px] mx-auto p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <p className="text-gray-700 text-sm mt-2 transition-all">
        {expanded ? description : shortDescription}
      </p>
      {description.length > 100 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 mt-2 block text-sm font-medium focus:outline-none"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default Card;
