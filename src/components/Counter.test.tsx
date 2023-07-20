import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';

describe('Counter', () => {
  it('should render correctly', () => {
    const sut = render(<Counter />);

    expect(sut).toBeDefined();
  });

  it('should increase the state value', async () => {
    const sut = render(<Counter />);

    const increaseBtn = sut.getByTestId('increase-btn');
    const resultParagrah = sut.getByTestId('state-value');

    await userEvent.click(increaseBtn);
    expect(resultParagrah.textContent).toEqual('1');
  });

  it('should decrease the state value', async () => {
    const sut = render(<Counter />);

    const increaseBtn = sut.getByTestId('increase-btn');
    const decreaseBtn = sut.getByTestId('decrease-btn');
    const resultParagrah = sut.getByTestId('state-value');

    await userEvent.click(increaseBtn);
    await userEvent.click(decreaseBtn);
    expect(resultParagrah.textContent).toEqual('0');
  });
});
