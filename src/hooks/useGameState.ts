import { useContext } from 'react';
import { GameContext } from '../context/Game';

export function useGameState() {
  return useContext(GameContext);
}
