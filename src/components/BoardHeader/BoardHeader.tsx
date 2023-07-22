import { Box, Button, Typography } from '@mui/material';
import { useGameState } from '@/src/hooks/useGameState';
import { GAME_IS_OVER } from '@/src/constants';
import { useGameDispatch } from '@/src/hooks/useGameDispatch';

const BoardHeader = () => {
  const { pairsFounded, round } = useGameState();
  const dispatch = useGameDispatch();

  return (
    <Box component={'header'} className="flex justify-between mb-3">
      <Box>
        <Typography className="text-2xl">
          Pairs Founded: {pairsFounded}
        </Typography>
        <Typography className="text-2xl">Round: {round}</Typography>
      </Box>
      {pairsFounded === GAME_IS_OVER ? (
        <Button
          className="text-2xl rounded-lg bg-primary.main text-white hover:opacity-1 hover:bg-primary.main "
          onClick={() => {
            dispatch({ type: 'PLAY_AGAIN' });
          }}
        >
          Play Again
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default BoardHeader;
