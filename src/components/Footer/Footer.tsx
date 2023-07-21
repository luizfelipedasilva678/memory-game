'use client';

import { Box, Typography } from '@mui/material';
import { Copyright, GitHub } from '@mui/icons-material';
import Link from 'next/link';
import { GITHUB_LINK } from '@/src/constants';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      className="flex justify-between p-4 fixed bottom-0 w-full"
      bgcolor={'primary.main'}
    >
      <Box
        component={'div'}
        className="flex gap-2"
        color={'text.primary'}
        data-testid="copyright-box"
      >
        <Copyright /> {new Date().getFullYear()},
        <Typography> Memory Game</Typography>
      </Box>
      <Link href={GITHUB_LINK} target="_blank" data-testid="github-link">
        <GitHub style={{ color: '#fff' }} />
      </Link>
    </Box>
  );
};

export default Footer;
