import React from "react";

const Badge = ({ text, color = "gray" }) => {
  const colorMap = {
    green: "bg-green-500 text-green-200",
    red: "bg-red-500 text-red-200",
    blue: "bg-blue-500 text-blue-200",
    yellow: "bg-yellow-500 text-yellow-200",
    gray: "bg-gray-500 text-gray-200",
  };

  return (
    <span
      className={`inline-flex items-center px-1.5 py-0.25 rounded-full text-xs font-medium ${colorMap[color]}`}
    >
      {text}
    </span>
  );
};

export default Badge;
 