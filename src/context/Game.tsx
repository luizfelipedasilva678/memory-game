import { createContext, useReducer, type Dispatch, useEffect } from 'react';
import { shuffle } from '../utils/shuffle';
import { CARDS } from '../constants';

const initialValue = {
  cards: CARDS,
  round: 0,
  pairsFounded: 0,
};

export const GameContext = createContext<GameState>(initialValue);
export const GameDispatchContext = createContext<Dispatch<GameContextActions>>(
  () => {}
);

const GameProvider = ({ children }: GameProviderProps) => {
  const [gameContext, dispatch] = useReducer(gameReducer, initialValue);

  useEffect(() => {
    dispatch({
      type: 'SHUFFLE_CARDS',
    });
  }, []);

  return (
    <GameContext.Provider value={gameContext}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

function gameReducer(
  currentState: GameState,
  action: GameContextActions
): GameState {
  switch (action.type) {
    case 'FLIP_CARD': {
      const newCards = currentState.cards.map((card) =>
        card.id === action.payload.cardId ? { ...card, flip: true } : card
      );

      return {
        ...currentState,
        cards: newCards,
      };
    }
    case 'UNFLIP_CARDS': {
      const newCards = currentState.cards.map((card) => ({
        ...card,
        flip: false,
      }));

      return {
        ...currentState,
        cards: newCards,
      };
    }
    case 'SHUFFLE_CARDS': {
      return {
        ...currentState,
        cards: shuffle(initialValue.cards),
      };
    }
    default: {
      throw Error('Unknown action');
    }
  }
}

export default GameProvider;
