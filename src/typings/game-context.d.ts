interface GameState {
  cards: Card[];
  round: number;
  pairsFounded: number;
}

interface GameProviderProps {
  children: React.ReactNode;
}

type GameContextActions = FlipCard | UnflipCards | ShuffleCards | FoundedPair;

interface FoundedPair {
  type: 'FOUNDED_PAIR';
  payload: {
    card1Id: string;
    card2Id: string;
  };
}

interface ShuffleCards {
  type: 'SHUFFLE_CARDS';
}

interface FlipCard {
  type: 'FLIP_CARD';
  payload: {
    cardId: string;
  };
}

interface UnflipCards {
  type: 'UNFLIP_CARDS';
}
