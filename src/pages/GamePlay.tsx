
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGame } from "@/context/GameContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GameInfo from "@/components/game/GameInfo";
import FlagCard from "@/components/game/FlagCard";
import GameResults from "@/components/game/GameResults";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import countries from "@/data/countries";

const GamePlay = () => {
  const { continentId } = useParams<{ continentId: string }>();
  const { state, handleFlagClick, selectContinent, startGame } = useGame();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If continent ID from URL is valid, select it
    if (continentId && countries.some(c => c.continent === continentId)) {
      selectContinent(continentId);
      // If game status is still waiting, start the game
      if (state.gameStatus === "waiting") {
        startGame();
      }
    } else {
      navigate("/");
    }
  }, [continentId]);
  
  // Get options for the current round
  const getOptions = () => {
    if (!state.currentCountry) return [];
    
    // Always include the correct answer
    const options = [state.currentCountry];
    
    // Get other countries from the same continent
    const otherCountries = state.countries
      .filter(c => c.id !== state.currentCountry?.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    return [...options, ...otherCountries].sort(() => Math.random() - 0.5);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12 px-4 container max-w-7xl mx-auto">
        {state.gameStatus === "waiting" && (
          <div className="flex justify-center items-center h-full">
            <div className="animate-pulse">Loading game...</div>
          </div>
        )}
        
        {state.gameStatus === "playing" && (
          <>
            <Button
              variant="ghost"
              className="mb-6 gap-2"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
            
            <GameInfo />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={state.round}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto"
              >
                {getOptions().map((country, index) => (
                  <FlagCard
                    key={country.id}
                    country={country}
                    onClick={() => handleFlagClick(country.id)}
                    delay={index * 0.1}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </>
        )}
        
        {state.gameStatus === "finished" && <GameResults />}
      </main>
      
      <Footer />
    </div>
  );
};

export default GamePlay;
