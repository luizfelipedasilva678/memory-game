import { AppBar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Typography className="text-2xl p-4 text-center ">Memory game</Typography>
    </AppBar>
  );
};

export default Header;
