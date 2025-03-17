
import { Country } from "../data/countries";

export type Player = {
  id: string;
  name: string;
  score: number;
  avatar?: string;
};

export type GameMode = "single" | "multiplayer";

export type GameState = {
  mode: GameMode;
  players: Player[];
  currentPlayer: string;
  selectedContinent: string | null;
  countries: Country[];
  currentCountry: Country | null;
  remainingFlags: number;
  round: number;
  totalRounds: number;
  timeLeft: number;
  gameStatus: "waiting" | "playing" | "finished";
};

export type GameAction = 
  | { type: "SELECT_CONTINENT"; payload: string }
  | { type: "START_GAME"; payload: GameMode }
  | { type: "ADD_PLAYER"; payload: Player }
  | { type: "FLAG_CLICKED"; payload: { playerId: string; countryId: string; isCorrect: boolean } }
  | { type: "NEXT_ROUND" }
  | { type: "TIMER_TICK" }
  | { type: "END_GAME" }
  | { type: "RESET_GAME" };
