import React from 'react';
import CardWrapper from './styled';
import { ICard } from '../../typings/ICard';

const Card = (props: ICard) => {
  const { emoji, setVisibleEmoji, emojisState } = props;

  return (
    <CardWrapper onClick={() => setVisibleEmoji(emojisState.concat(emoji))}>
      {emoji}
    </CardWrapper>
  );
};

export default Card;
