interface GameState {
  cards: Card[];
  round: number;
  pairsFounded: number;
}

interface GameProviderProps {
  children: React.ReactNode;
}

type GameContextActions = FlipCard | UnflipCards | ShuffleCards;

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
