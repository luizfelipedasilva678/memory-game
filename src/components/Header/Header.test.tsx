import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const sut = render(<Header />);

    expect(sut).toBeDefined();
  });

  it('should render with correctly text', async () => {
    const sut = render(<Header />);

    expect(await sut.findByText('Memory game')).toBeDefined();
  });
});
