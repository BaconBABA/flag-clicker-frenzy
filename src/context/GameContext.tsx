
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { GameState, GameAction, Player } from "../types/game";
import countries from "../data/countries";
import { toast } from "../components/ui/use-toast";

const initialState: GameState = {
  mode: "single",
  players: [{ id: "player1", name: "Player 1", score: 0 }],
  currentPlayer: "player1",
  selectedContinent: null,
  countries: [],
  currentCountry: null,
  remainingFlags: 0,
  round: 0,
  totalRounds: 10,
  timeLeft: 15,
  gameStatus: "waiting",
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case "SELECT_CONTINENT":
      const continentCountries = countries.filter(
        country => country.continent === action.payload
      );
      return {
        ...state,
        selectedContinent: action.payload,
        countries: continentCountries,
        remainingFlags: continentCountries.length,
      };
    
    case "START_GAME":
      if (!state.selectedContinent) {
        toast({
          title: "Please select a continent first",
          variant: "destructive"
        });
        return state;
      }
      
      // Shuffle countries and pick the first one
      const shuffledCountries = [...state.countries].sort(() => Math.random() - 0.5);
      return {
        ...state,
        mode: action.payload,
        countries: shuffledCountries,
        currentCountry: shuffledCountries[0],
        round: 1,
        timeLeft: 15,
        gameStatus: "playing",
      };
    
    case "ADD_PLAYER":
      if (state.players.length >= 4) {
        toast({
          title: "Maximum 4 players allowed",
          variant: "destructive"
        });
        return state;
      }
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    
    case "FLAG_CLICKED":
      const { playerId, countryId, isCorrect } = action.payload;
      const updatedPlayers = state.players.map(player => 
        player.id === playerId
          ? { ...player, score: player.score + (isCorrect ? 10 : -5) }
          : player
      );
      
      // Move to next country if correct
      const currentIndex = state.countries.findIndex(c => c.id === state.currentCountry?.id);
      const nextIndex = currentIndex + 1;
      const nextCountry = nextIndex < state.countries.length ? state.countries[nextIndex] : null;
      
      // Check if we need to end the game
      if (!nextCountry || state.round >= state.totalRounds) {
        return {
          ...state,
          players: updatedPlayers,
          currentCountry: null,
          gameStatus: "finished",
        };
      }
      
      return {
        ...state,
        players: updatedPlayers,
        currentCountry: nextCountry,
        remainingFlags: state.remainingFlags - (isCorrect ? 1 : 0),
        round: isCorrect ? state.round + 1 : state.round,
        timeLeft: 15, // Reset timer on flag click
      };
    
    case "NEXT_ROUND":
      const nextRoundIndex = state.round;
      if (nextRoundIndex >= state.countries.length || state.round >= state.totalRounds) {
        return {
          ...state,
          gameStatus: "finished",
        };
      }
      
      return {
        ...state,
        currentCountry: state.countries[nextRoundIndex],
        round: state.round + 1,
        timeLeft: 15,
      };
    
    case "TIMER_TICK":
      if (state.timeLeft <= 0) {
        // Auto move to next round if time expires
        const roundIndex = state.round;
        if (roundIndex >= state.countries.length - 1 || state.round >= state.totalRounds) {
          return {
            ...state,
            gameStatus: "finished",
          };
        }
        
        return {
          ...state,
          currentCountry: state.countries[roundIndex + 1],
          round: state.round + 1,
          timeLeft: 15,
        };
      }
      
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      };
    
    case "END_GAME":
      return {
        ...state,
        gameStatus: "finished",
      };
    
    case "RESET_GAME":
      return {
        ...initialState,
        mode: state.mode,
        players: state.players.map(player => ({ ...player, score: 0 })),
      };
    
    default:
      return state;
  }
};

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  addPlayer: (name: string) => void;
  startGame: () => void;
  selectContinent: (continentId: string) => void;
  handleFlagClick: (countryId: string) => void;
  resetGame: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  
  // Game timer effect
  useEffect(() => {
    if (state.gameStatus === "playing") {
      const timer = setInterval(() => {
        dispatch({ type: "TIMER_TICK" });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [state.gameStatus, state.timeLeft]);
  
  const addPlayer = (name: string) => {
    const newPlayer: Player = {
      id: `player${state.players.length + 1}`,
      name,
      score: 0,
    };
    dispatch({ type: "ADD_PLAYER", payload: newPlayer });
  };
  
  const startGame = () => {
    dispatch({ type: "START_GAME", payload: state.mode });
  };
  
  const selectContinent = (continentId: string) => {
    dispatch({ type: "SELECT_CONTINENT", payload: continentId });
  };
  
  const handleFlagClick = (countryId: string) => {
    const isCorrect = countryId === state.currentCountry?.id;
    
    toast({
      title: isCorrect ? "Correct!" : "Wrong!",
      description: isCorrect 
        ? `That's the flag of ${state.currentCountry?.name}` 
        : `Try again. You clicked the wrong flag.`,
      variant: isCorrect ? "default" : "destructive",
    });
    
    dispatch({
      type: "FLAG_CLICKED",
      payload: {
        playerId: state.currentPlayer,
        countryId,
        isCorrect,
      },
    });
  };
  
  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };
  
  return (
    <GameContext.Provider
      value={{
        state,
        dispatch,
        addPlayer,
        startGame,
        selectContinent,
        handleFlagClick,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
