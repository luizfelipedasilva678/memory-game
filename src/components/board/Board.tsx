import React, { useEffect, useState } from 'react';
import BoardContainer from './styled';
import { shuffledEmotes } from '../../utils/emojis';
import checkIfAreEquals from '../../utils/check-equals';
import Card from '../card/Card';

function Board() {
  const [emojis, setEmojis] = useState<Array<string>>([]);
  const [visibleCards, setVisibleCards] = useState<Array<string>>([]);

  useEffect(() => {
    setEmojis(emojis.concat(...shuffledEmotes));
  }, []);

  useEffect(() => {
    if (visibleCards.length === 2) {
      if (checkIfAreEquals(visibleCards[0], visibleCards[1])) {
        setEmojis(emojis.filter((value) => value != visibleCards[0]));
        setVisibleCards([]);
      } else {
        setVisibleCards([]);
      }
    }
  }, [visibleCards]);

  return (
    <BoardContainer>
      {emojis.map((emoji, index) => (
        <Card
          emoji={emoji}
          key={index}
          setVisibleEmoji={setVisibleCards}
          emojisState={visibleCards}
        />
      ))}
    </BoardContainer>
  );
}

export default Board;
