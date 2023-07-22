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
    case 'PLAY_AGAIN': {
      return {
        ...currentState,
        pairsFounded: 0,
        round: 0,
        cards: shuffle(initialValue.cards),
      };
    }
    case 'FLIP_CARD': {
      const newCards = currentState.cards.map((card) =>
        card.id === action.payload.cardId ? { ...card, flip: true } : card
      );

      return {
        ...currentState,
        cards: newCards,
      };
    }
    case 'FOUNDED_PAIR': {
      const newCards = currentState.cards.map((card) =>
        card.id === action.payload.card1Id || card.id === action.payload.card2Id
          ? { ...card, founded: true }
          : card
      );

      return {
        ...currentState,
        cards: newCards,
        pairsFounded: currentState.pairsFounded + 1,
        round: currentState.round + 1,
      };
    }
    case 'UNFLIP_CARDS': {
      const newCards = currentState.cards.map((card) => ({
        ...card,
        ...(card.founded ? { flip: true } : { flip: false }),
      }));

      return {
        ...currentState,
        cards: newCards,
        round: currentState.round + 1,
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
