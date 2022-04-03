import { IEmoji } from './Emojis';
export interface ICard {
  emoji: IEmoji;
  setVisibleEmoji: React.Dispatch<React.SetStateAction<IEmoji[]>>;
  emojisState: IEmoji[];
  foundPairs: IEmoji[];
}
