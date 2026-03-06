import { motion } from "framer-motion";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

const FloatingImage = ({ src, alt, className = "", delay = 0 }: FloatingImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      className={`pointer-events-none select-none ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-700"
        loading="lazy"
      />
    </motion.div>
  );
};

export default FloatingImage;
