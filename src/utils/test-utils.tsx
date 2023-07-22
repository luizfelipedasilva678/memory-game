import { render } from '@testing-library/react';
import { type ReactElement } from 'react';
import {
  GameContext,
  GameDispatchContext,
  initialValue,
} from '@/src/context/Game';

const AllTheProviders = ({
  children,
  dispatch,
}: {
  children: React.ReactNode;
  dispatch: jest.Mock<any, any, any>;
}) => {
  return (
    <GameContext.Provider value={initialValue}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

const customRender = (ui: ReactElement, dispatch: jest.Mock<any, any, any>) =>
  render(<AllTheProviders dispatch={dispatch}> {ui} </AllTheProviders>);

export { customRender };
