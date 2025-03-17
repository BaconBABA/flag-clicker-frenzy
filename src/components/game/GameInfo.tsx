
import { useGame } from "@/context/GameContext";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

const GameInfo = () => {
  const { state } = useGame();
  const timePercentage = (state.timeLeft / 15) * 100;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-6 w-full max-w-2xl mx-auto mb-6"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl font-bold mb-1">Round {state.round} of {state.totalRounds}</h2>
          <p className="text-muted-foreground">
            Find the flag of <span className="font-medium text-foreground">{state.currentCountry?.name}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Time left:</span>
          <span className="text-lg font-bold">{state.timeLeft}s</span>
        </div>
      </div>
      
      <Progress value={timePercentage} className="h-2" />
      
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {state.players.map((player) => (
          <div key={player.id} className="text-center">
            <div className="font-medium">{player.name}</div>
            <div className="text-2xl font-bold">{player.score}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GameInfo;
