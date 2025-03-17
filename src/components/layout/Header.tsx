
import { Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGame } from "@/context/GameContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { state, resetGame } = useGame();
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    resetGame();
    navigate("/");
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-10 glass-card py-4 px-6 flex items-center justify-between transition-all duration-300">
      <div className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-primary animate-float" />
        <h1 className="text-2xl font-bold text-foreground">FlagQuest</h1>
      </div>
      
      <div className="flex items-center gap-4">
        {state.gameStatus === "playing" && (
          <div className="px-4 py-1 rounded-full bg-secondary text-secondary-foreground">
            <span className="font-medium">Round {state.round}/{state.totalRounds}</span>
          </div>
        )}
        
        {state.gameStatus !== "waiting" && (
          <Button variant="ghost" onClick={handleHomeClick}>
            Home
          </Button>
        )}
        
        <Button variant="outline" className="gap-2" onClick={() => navigate("/multiplayer")}>
          <Users className="h-4 w-4" />
          <span>Multiplayer</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
