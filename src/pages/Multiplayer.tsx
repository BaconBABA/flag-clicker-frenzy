
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import continents from "@/data/continents";
import ContinentCard from "@/components/home/ContinentCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlayerForm from "@/components/multiplayer/PlayerForm";
import { useGame } from "@/context/GameContext";
import { Play } from "lucide-react";

const Multiplayer = () => {
  const navigate = useNavigate();
  const { state, startGame } = useGame();
  
  const handleStartGame = () => {
    if (state.selectedContinent) {
      navigate(`/play/${state.selectedContinent}`);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Multiplayer Mode</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Play with friends! Add players and select a continent to begin.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-1/3">
            <PlayerForm />
          </div>
          
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h2 className="text-xl font-bold mb-4">Select a Continent</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {continents.map((continent, index) => (
                  <ContinentCard key={continent.id} continent={continent} index={index} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Button
            size="lg"
            onClick={handleStartGame}
            disabled={!state.selectedContinent || state.players.length < 2}
            className="button-shine gap-2 py-6 px-8 text-lg"
          >
            <Play className="h-5 w-5" />
            Start Game
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Multiplayer;
