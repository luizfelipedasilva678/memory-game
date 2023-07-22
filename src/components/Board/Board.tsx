'use client';

import { useGameState } from '@/src/hooks/useGameState';
import { Box } from '@mui/material';
import { useGameDispatch } from '@/src/hooks/useGameDispatch';
import Card from '../Card';

const Board = () => {
  const { cards } = useGameState();
  const dispatch = useGameDispatch();

  const handleClick = (card: Card) => {
    dispatch({
      type: 'FLIP_CARD',
      payload: {
        cardId: card.id,
      },
    });
  };

  return (
    <Box component={'div'} className="grid grid-cols-3 gap-2">
      {cards.map((card) => (
        <Card key={card.id} cardInfo={card} onClick={handleClick} />
      ))}
    </Box>
  );
};

export default Board;
