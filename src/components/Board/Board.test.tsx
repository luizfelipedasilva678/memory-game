import { customRender } from '@/src/utils/test-utils';
import Board from './Board';
import { initialValue } from '@/src/context/Game';
import { dispatch } from '@/src/mocks';

describe('Board', () => {
  it('should render correctly', () => {
    const sut = customRender(<Board />);

    expect(sut).toBeDefined();
  });

  it('should render 12 cards', () => {
    const sut = customRender(<Board />);

    const cards = sut.queryAllByTestId('card-container');

    expect(cards.length).toEqual(12);
  });

  it('should call dispatch when 2 cards are flipped', () => {
    initialValue.cards[0].flip = true;
    initialValue.cards[1].flip = true;

    customRender(<Board />, initialValue);

    expect(dispatch).toBeCalledTimes(1);
  });

  it('should not call dispatch when 1 cards are flipped', () => {
    initialValue.cards[0].flip = false;
    initialValue.cards[1].flip = false;

    customRender(<Board />, initialValue);

    expect(dispatch).toBeCalledTimes(1);
  });
});
