import { customRender } from '@/src/utils/test-utils';
import BoardHeader from './BoardHeader';
import { initialValue } from '@/src/context/Game';

describe('BoardHeader', () => {
  it('should render correctly', () => {
    const sut = customRender(<BoardHeader />);

    expect(sut).toBeDefined();
  });

  it('should render with correct founded pairs info', () => {
    const sut = customRender(<BoardHeader />);

    const pairsInfo = sut.getByText('Pairs Founded: 0');

    expect(pairsInfo).toBeDefined();
  });

  it('should render with correct round info', () => {
    const sut = customRender(<BoardHeader />);

    const roundInfo = sut.getByText('Round: 0');

    expect(roundInfo).toBeDefined();
  });

  it('should not find play again button', async () => {
    const sut = customRender(<BoardHeader />);

    const playAgainButton = sut.queryByText('Play Again');

    expect(playAgainButton).toBeNull();
  });

  it('should  find play again button', async () => {
    const newInitialValue = { ...initialValue, pairsFounded: 6 };

    const sut = customRender(<BoardHeader />, newInitialValue);

    const playAgainButton = sut.queryByText('Play Again');

    expect(playAgainButton).toBeDefined();
  });
});
