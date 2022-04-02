import React from 'react';
import { GlobalStyle } from '../global-style/global-style';
import Main from './styled';
import { emojis } from '../../utils/emojis';
import { shuffle } from '../../utils/shuffle';

function App() {
  return (
    <>
      {console.log(shuffle(emojis))}
      <GlobalStyle />
      <Main>
        <h1> Oi </h1>
      </Main>
    </>
  );
}

export default App;
