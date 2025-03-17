
import React from "react";
import { motion } from "framer-motion";
import { Country } from "@/data/countries";
import { cn } from "@/lib/utils";

type FlagCardProps = {
  country: Country;
  onClick: () => void;
  selected?: boolean;
  animate?: boolean;
  delay?: number;
};

const FlagCard = ({
  country,
  onClick,
  selected = false,
  animate = true,
  delay = 0,
}: FlagCardProps) => {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      exit={animate ? { opacity: 0, scale: 0.9 } : false}
      transition={{ duration: 0.3, delay: delay }}
      className={cn(
        "flag-card cursor-pointer overflow-hidden",
        "aspect-video rounded-xl shadow-sm",
        "transition-all duration-300 transform",
        selected ? "ring-4 ring-primary scale-105" : "hover:scale-105",
        "bg-white"
      )}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <img
          src={country.flag}
          alt={`Flag of ${country.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/320x180?text=Flag+Unavailable";
          }}
        />
      </div>
    </motion.div>
  );
};

export default FlagCard;
