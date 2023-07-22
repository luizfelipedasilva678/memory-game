import { render } from '@testing-library/react';
import { type ReactElement } from 'react';
import { dispatch } from '@/src/mocks';
import {
  GameContext,
  GameDispatchContext,
  initialValue,
} from '@/src/context/Game';

const AllTheProviders = ({
  children,
  customInitialValue,
}: {
  children: React.ReactNode;
  customInitialValue: GameState | undefined;
}) => {
  return (
    <GameContext.Provider value={customInitialValue ?? initialValue}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameContext.Provider>
  );
};

const customRender = (
  ui: ReactElement,
  customInitialValue: GameState | undefined = undefined
) =>
  render(
    <AllTheProviders customInitialValue={customInitialValue}>
      {ui}
    </AllTheProviders>
  );

export { customRender };
