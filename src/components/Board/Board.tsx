'use client';

import { Box } from '@mui/material';
import { debounce } from 'radash';
import { useEffect } from 'react';
import { useGameState } from '@/src/hooks/useGameState';
import { useGameDispatch } from '@/src/hooks/useGameDispatch';
import { UNFLIP_DELAY } from '@/src/constants';
import Card from '../Card';
import BoardHeader from '../BoardHeader';

const Board = () => {
  const { cards } = useGameState();
  const dispatch = useGameDispatch();
  const cardsFlipped = cards.filter((card) => card.flip && !card.founded);
  const debouncedDispatch = debounce({ delay: UNFLIP_DELAY }, () => {
    dispatch({ type: 'UNFLIP_CARDS' });
  });

  useEffect(() => {
    if (cardsFlipped.length === 2) {
      const [card1, card2] = cardsFlipped;

      if (card1.image !== card2.image) {
        debouncedDispatch();
      } else {
        dispatch({
          type: 'FOUNDED_PAIR',
          payload: {
            card1Id: card1.id,
            card2Id: card2.id,
          },
        });
      }
    }
  }, [cardsFlipped]);

  return (
    <Box>
      <BoardHeader />
      <Box component={'div'} className="grid grid-cols-3 gap-2">
        {cards.map((card) => (
          <Card key={card.id} cardInfo={card} />
        ))}
      </Box>
    </Box>
  );
};

export default Board;
