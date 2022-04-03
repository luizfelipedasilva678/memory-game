import React from 'react';
import { GlobalStyle } from '../global-style/global-style';
import Main from './styled';
import Board from '../board/Board';

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Board />
      </Main>
    </>
  );
}

export default App;
