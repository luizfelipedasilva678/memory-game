import React, { useState, useEffect } from 'react';
import CardWrapper from './styled';
import { ICard } from '../../typings/ICard';

const Card = (props: ICard) => {
  const { emoji, setVisibleEmoji, emojisState, foundPairs } = props;
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const [wasFound, setWasFound] = useState<boolean>(false);

  useEffect(() => {
    console.log('TEste', emojisState);

    if (foundPairs.includes(emoji)) {
      return;
    }

    if (emojisState.length > 0) {
      if (!emojisState.includes(emoji)) {
        setShowEmoji(false);
      } else {
        setShowEmoji(true);
      }
    } else {
      setTimeout(() => {
        setShowEmoji(false);
      }, 500);
    }
  }, [emojisState]);

  useEffect(() => {
    if (foundPairs.includes(emoji)) {
      setShowEmoji(true);
      setWasFound(true);
    }
  }, [foundPairs]);

  return (
    <CardWrapper
      onClick={() => {
        if (wasFound) {
          return;
        }

        if (!emojisState.includes(emoji)) {
          setVisibleEmoji(emojisState.concat(emoji));
        }
      }}
      className={wasFound ? 'unclickable' : ''}
    >
      {showEmoji ? emoji.emoji : ''}
    </CardWrapper>
  );
};

export default Card;
