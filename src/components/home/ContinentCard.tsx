
import { motion } from "framer-motion";
import { Continent } from "@/data/continents";
import { useGame } from "@/context/GameContext";
import { cn } from "@/lib/utils";

type ContinentCardProps = {
  continent: Continent;
  index: number;
};

const ContinentCard = ({ continent, index }: ContinentCardProps) => {
  const { selectContinent, state } = useGame();
  const isSelected = state.selectedContinent === continent.id;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "continent-card cursor-pointer group",
        "h-60 sm:h-72 w-full relative overflow-hidden rounded-2xl",
        "transition-all duration-300 transform",
        isSelected ? "ring-4 ring-primary scale-105" : "hover:scale-105"
      )}
      onClick={() => selectContinent(continent.id)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
      
      <div 
        className={cn(
          "absolute top-0 left-0 w-full h-1.5 z-20",
          `bg-gradient-to-r ${continent.color}`
        )}
      />
      
      <img
        src={continent.image}
        alt={continent.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <span className={cn(
          "inline-block px-2 py-1 text-xs font-medium text-white rounded-full mb-2",
          `bg-gradient-to-r ${continent.color}`
        )}>
          {`${continent.name}`}
        </span>
        <h3 className="text-xl font-bold text-white mb-1">{continent.name}</h3>
        <p className="text-sm text-white/80">{continent.description}</p>
      </div>
      
      {isSelected && (
        <div className="absolute top-4 right-4 z-20 bg-white rounded-full p-1.5 shadow-lg">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-primary" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

export default ContinentCard;
