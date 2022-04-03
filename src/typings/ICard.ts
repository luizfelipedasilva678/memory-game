export interface ICard {
  emoji: string;
  setVisibleEmoji: React.Dispatch<React.SetStateAction<string[]>>;
  emojisState: string[];
}
