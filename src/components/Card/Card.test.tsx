import { render, fireEvent } from '@testing-library/react';
import Card from './Card';
import { cardInfo } from '@/src/mocks';
import { customRender } from '../../utils/test-utils';

describe('Card', () => {
  it('shoudl render correctly', () => {
    const sut = render(<Card cardInfo={cardInfo} />);

    expect(sut).toBeDefined();
  });

  it('should render card image correctly', () => {
    const sut = render(<Card cardInfo={cardInfo} />);

    const imageCard = sut.getByTestId('imagecard');

    expect(imageCard).toBeDefined();
  });

  it('should render card image with correct image', () => {
    const sut = render(<Card cardInfo={cardInfo} />);

    const imageCard = sut.getByTestId('imagecard');

    expect(imageCard.textContent).toEqual('😁');
  });

  it('should flip card', async () => {
    const dispatch = jest.fn();

    const sut = customRender(<Card cardInfo={cardInfo} />, dispatch);

    const backcard = sut.getByTestId('backcard');

    fireEvent.click(backcard);

    expect(dispatch).toBeCalled();
  });
});
