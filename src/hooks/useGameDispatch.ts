import { useContext } from 'react';
import { GameDispatchContext } from '../context/Game';

export const useGameDispatch = () => {
  return useContext(GameDispatchContext);
};
