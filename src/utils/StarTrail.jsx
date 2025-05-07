import { useEffect, useState } from "react";

let idCounter = 0;

const colors = [
  "#f87171", // red-400
  "#facc15", // yellow-400
  "#34d399", // green-400
  "#60a5fa", // blue-400
  "#a78bfa", // purple-400
  "#fb923c", // orange-400
  "#ec4899", // pink-400
];

export default function StarTrail({ fromRef, toRef, trigger }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    if (!trigger || !fromRef?.current || !toRef?.current) return;

    const from = fromRef.current.getBoundingClientRect();
    const to = toRef.current.getBoundingClientRect();

    const fromX = from.left + from.width / 2;
    const fromY = from.top + from.height / 2;
    const toX = to.left + to.width / 2;
    const toY = to.top + to.height / 2;

    const id = idCounter++;
    const deltaX = toX - fromX;
    const deltaY = toY - fromY;

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const star = {
      id,
      fromX,
      fromY,
      transform: `translate(${deltaX}px, ${deltaY}px)`,
      color: randomColor,
    };

    setStars((prev) => [...prev, star]);

    const timeout = setTimeout(() => {
      setStars((prev) => prev.filter((s) => s.id !== id));
    }, 1100);

    

    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star-trail"
          style={{
            top: star.fromY,
            left: star.fromX,
            backgroundColor: star.color,
            "--trail-transform": star.transform,
          }}
        />
      ))}
    </>
  );
}
