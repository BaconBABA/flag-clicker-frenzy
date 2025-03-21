
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import continents from "@/data/continents";
import ContinentCard from "@/components/home/ContinentCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useGame } from "@/context/GameContext";
import { Globe, Users, Play } from "lucide-react";

const Index = () => {
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
          <div className="inline-flex items-center justify-center mb-6">
            <Globe className="h-16 w-16 text-primary animate-float" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to FlagQuest</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your geography knowledge by identifying country flags. Select a continent to begin.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {continents.map((continent, index) => (
            <ContinentCard key={continent.id} continent={continent} index={index} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Button
            size="lg"
            onClick={handleStartGame}
            disabled={!state.selectedContinent}
            className="button-shine gap-2 py-6 text-lg"
          >
            <Play className="h-5 w-5" />
            Start Single Player
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/multiplayer")}
            className="gap-2 py-6 text-lg"
          >
            <Users className="h-5 w-5" />
            Multiplayer Mode
          </Button>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
