
import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Trophy, Home, RotateCcw } from "lucide-react";

const GameResults = () => {
  const { state, resetGame } = useGame();
  const navigate = useNavigate();
  
  // Sort players by score
  const sortedPlayers = [...state.players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl p-8 w-full max-w-2xl mx-auto text-center"
    >
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
          <Trophy className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Game Finished!</h2>
        {state.players.length > 1 ? (
          <p className="text-xl text-muted-foreground">
            {winner.name} wins with {winner.score} points!
          </p>
        ) : (
          <p className="text-xl text-muted-foreground">
            You scored {winner.score} points!
          </p>
        )}
      </div>
      
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-medium">Final Scores</h3>
        <div className="space-y-3">
          {sortedPlayers.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary"
            >
              <span className="font-medium">{index + 1}. {player.name}</span>
              <span className="text-lg font-bold">{player.score}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button 
          variant="default" 
          size="lg" 
          className="gap-2"
          onClick={() => {
            resetGame();
            if (state.selectedContinent) {
              navigate(`/play/${state.selectedContinent}`);
            } else {
              navigate("/");
            }
          }}
        >
          <RotateCcw className="h-4 w-4" />
          Play Again
        </Button>
        
        <Button 
          variant="outline" 
          size="lg" 
          className="gap-2"
          onClick={() => {
            resetGame();
            navigate("/");
          }}
        >
          <Home className="h-4 w-4" />
          Home
        </Button>
      </div>
    </motion.div>
  );
};

export default GameResults;
