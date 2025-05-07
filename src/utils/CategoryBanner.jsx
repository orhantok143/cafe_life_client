import { useState } from "react";
import { motion } from "framer-motion";

export const CategoryBanner = ({
  title,
  subtitle,
  image,
  discount,
  deadline,
}) => {
  const [blurFinal, setBlurFinal] = useState(false);

  return (
    <div className="relative mb-2 mt-19 w-full h-72 md:h-80 overflow-hidden shadow-xl p-4 flex items-center justify-between">
      {/* Background Image with scale */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Gradient Animation */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          background: "linear-gradient(to right, rgba(0,0,0), transparent)",
        }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setBlurFinal(true)}
      />

      {/* Blur Layer */}
      <motion.div
        className="absolute inset-0 bg-black/10 z-20"
        initial={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
        animate={{
          backdropFilter: blurFinal ? "blur(2px)" : "blur(0px)",
          WebkitBackdropFilter: blurFinal ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Icon Layers */}

      {/* <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {icons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt="decor"
            className={`absolute z-30 ${icon.className}`}
            style={icon.style}
          />
        ))}
      </motion.div> */}

      {/* Animated Content */}
      <motion.div
        className="relative z-30 text-gray-400 max-w-[70%]"
        initial={{
          opacity: 0,
          y: 20,
        
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl text-nowrap font-extrabold drop-shadow-md text-gray-200">
          {title}
        </h2>
        <p className="text-base md:text-lg mt-1 drop-shadow">{subtitle}</p>

        {/* Discount and Deadline Tags */}
        {discount && deadline && (
          <div className="mt-3 flex gap-3 items-center text-xs sm:text-sm font-medium">
            <span className="bg-white/10 text-nowrap px-4 py-3 rounded-full backdrop-blur-lg">
              %{discount} İndirim
            </span>
            <span className="bg-white/10 text-nowrap px-3 py-3 rounded-full backdrop-blur-lg">
              Son Gün: {deadline}
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
};
