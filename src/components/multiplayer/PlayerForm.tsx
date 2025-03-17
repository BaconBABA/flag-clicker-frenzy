
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGame } from "@/context/GameContext";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

const PlayerForm = () => {
  const [playerName, setPlayerName] = useState("");
  const { addPlayer, state } = useGame();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      addPlayer(playerName.trim());
      setPlayerName("");
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl p-6 w-full max-w-xl"
    >
      <h2 className="text-xl font-bold mb-4">Add Players</h2>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter player name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="flex-1"
          disabled={state.players.length >= 4}
        />
        <Button 
          type="submit" 
          disabled={!playerName.trim() || state.players.length >= 4}
          className="gap-2"
        >
          <UserPlus className="h-4 w-4" />
          Add
        </Button>
      </form>
      
      <div className="mt-6 space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Current players:</h3>
        {state.players.map((player, index) => (
          <motion.div
            key={player.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 rounded-lg bg-secondary"
          >
            <span className="font-medium">{player.name}</span>
            <span className="text-xs text-muted-foreground">Player {index + 1}</span>
          </motion.div>
        ))}
      </div>
      
      {state.players.length >= 4 && (
        <p className="text-sm text-muted-foreground mt-4">
          Maximum 4 players reached
        </p>
      )}
    </motion.div>
  );
};

export default PlayerForm;
