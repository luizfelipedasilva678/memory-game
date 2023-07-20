'use client';

import { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

export const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <Box component={'div'} className="flex gap-5 items-center justify-between">
      <Button
        onClick={() => {
          setValue(value + 1);
        }}
        data-testid="increase-btn"
        className="rounded-lg bg-blue-600 text-white hover:bg-blue-600"
      >
        +
      </Button>
      <Typography data-testid="state-value" component={'p'}>
        {value}
      </Typography>
      <Button
        onClick={() => {
          setValue(value - 1);
        }}
        data-testid="decrease-btn"
        className="rounded-lg bg-blue-600 text-white hover:bg-blue-600"
      >
        -
      </Button>
    </Box>
  );
};

export default Counter;
