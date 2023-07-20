import { Typography } from '@mui/material';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Typography component={'h1'} className="text-lg mb-10">
        Next.js 13 template for new projects.
      </Typography>
      <Counter />
    </main>
  );
};

export default Home;
