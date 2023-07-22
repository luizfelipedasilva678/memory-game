import { useGameDispatch } from '@/src/hooks/useGameDispatch';
import { PERSPECTIVE } from '@/src/constants';
import { Box } from '@mui/material';
import { useGameState } from '@/src/hooks/useGameState';

interface Props {
  cardInfo: Card;
}

const Card = ({ cardInfo }: Props) => {
  const dispatch = useGameDispatch();
  const { cards } = useGameState();
  const { flip, image, id } = cardInfo;
  const cardsFlipped = cards.filter((card) => card.flip && !card.founded);

  return (
    <Box
      component={'div'}
      className={`w-40 h-40 sm:w-28 sm:h-28 bg-transparent ${
        cardsFlipped.length === 2 ? 'pointer-events-none' : ''
      }`}
      sx={{
        perspective: PERSPECTIVE,
      }}
    >
      <Box
        component={'div'}
        className="cursor-pointer relative w-full h-full text-center flex items-center rounded-lg"
        data-testid="frontcard"
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
          ...(flip
            ? {
                transform: 'rotateY(180deg)',
              }
            : {}),
        }}
      >
        <Box
          component={'div'}
          className="text-5xl text-center text-white w-full h-full rounded-lg absolute flex-col flex justify-around"
          data-testid="backcard"
          sx={{
            bgcolor: 'primary.main',
            backfaceVisibility: 'hidden',
          }}
          onClick={() => {
            dispatch({
              type: 'FLIP_CARD',
              payload: {
                cardId: id,
              },
            });
          }}
        >
          ?
        </Box>
        <Box
          component={'div'}
          className="text-5xl w-full h-full absolute rounded-lg flex-col flex justify-around"
          data-testid="imagecard"
          sx={{
            bgcolor: 'primary.main',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {image}
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
