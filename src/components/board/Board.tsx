import React, { useEffect, useState } from 'react';
import BoardContainer from './styled';
import { shuffledEmotes } from '../../utils/emojis';
import checkIfAreEquals from '../../utils/check-equals';
import Card from '../card/Card';
import { IEmoji } from '../../typings/Emojis';

function Board() {
  const [emojis, setEmojis] = useState<Array<IEmoji>>([]);
  const [visibleCards, setVisibleCards] = useState<Array<IEmoji>>([]);
  const [foundPairs, setFoundPairs] = useState<Array<IEmoji>>([]);

  useEffect(() => {
    setEmojis(emojis.concat(...shuffledEmotes));
  }, []);

  useEffect(() => {
    if (visibleCards.length === 2) {
      if (checkIfAreEquals(visibleCards[0].emoji, visibleCards[1].emoji)) {
        setFoundPairs(foundPairs.concat(...visibleCards));
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
          foundPairs={foundPairs}
        />
      ))}
    </BoardContainer>
  );
}

export default Board;
