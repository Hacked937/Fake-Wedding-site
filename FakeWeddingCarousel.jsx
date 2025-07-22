import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your local images
import img1 from "../assets/Photo1.png";
import img2 from "../assets/Photo2.png";
import img3 from "../assets/photo3.avif";
import img4 from "../assets/Photo4.jpg";

const images = [
  { url: img1, caption: "The Aesthetic Entrance 💐" },
  { url: img2, caption: "Fake Wedding, Real Emotions 😭✨" },
  { url: img3, caption: "Dance Floor On Fire 🔥🕺" },
  { url: img4, caption: "Cheers to Chaos 🥂🎉" },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function FakeWeddingCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = (dir) => {
    setIndex(([prev]) => [(prev + dir + images.length) % images.length, dir]);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => paginate(1), 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg mt-10">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={images[index].url}
          src={images[index].url}
          alt="Wedding"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7 }}
          className="w-full h-[400px] object-cover"
        />
      </AnimatePresence>

      <div className="absolute bottom-0 bg-black/60 w-full text-white text-center py-3 text-lg">
        {images[index].caption}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 px-2 rounded-full hover:bg-black/70"
      >
        ‹
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl bg-black/30 px-2 rounded-full hover:bg-black/70"
      >
        ›
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-14 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
