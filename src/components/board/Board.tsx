import React, { useEffect, useState } from 'react';
import BoardContainer, {
  BoardHeader,
  BoardWrapper,
  BoardText,
  BoardHeaderWrapper,
  BoardRestartButton,
} from './styled';
import { shuffledEmotes } from '../../utils/emojis';
import checkIfAreEquals from '../../utils/check-equals';
import Card from '../card/Card';
import { IEmoji } from '../../typings/Emojis';

function Board() {
  const [emojis, setEmojis] = useState<Array<IEmoji>>([]);
  const [visibleCards, setVisibleCards] = useState<Array<IEmoji>>([]);
  const [foundPairs, setFoundPairs] = useState<Array<IEmoji>>([]);
  const [round, setRound] = useState<number>(0);
  // eslint-disable-next-line no-unused-vars
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);

  useEffect(() => {
    if (foundPairs.length / 2 !== 6) {
      return;
    }

    setGameIsOver(true);
  }, [foundPairs]);

  useEffect(() => {
    setEmojis(emojis.concat(...shuffledEmotes));
  }, []);

  useEffect(() => {
    if (visibleCards.length === 2) {
      if (checkIfAreEquals(visibleCards[0].emoji, visibleCards[1].emoji)) {
        setFoundPairs(foundPairs.concat(...visibleCards));
        setVisibleCards([]);
        setRound(round + 1);
      } else {
        setVisibleCards([]);
        setRound(round + 1);
      }
    }
  }, [visibleCards]);

  return (
    <BoardWrapper>
      <BoardHeader>
        <BoardHeaderWrapper>
          <BoardText>Round: {round}</BoardText>
          <BoardText>Found Pairs: {foundPairs.length / 2}</BoardText>
        </BoardHeaderWrapper>
        {gameIsOver ? (
          <BoardRestartButton onClick={() => window.location.reload()}>
            Restart game
          </BoardRestartButton>
        ) : (
          <></>
        )}
      </BoardHeader>
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
    </BoardWrapper>
  );
}

export default Board;
