import { shuffle } from './shuffle';

const emojis = [
  '😀',
  '😀',
  '😂',
  '😂',
  '😃',
  '😃',
  '😄',
  '😄',
  '😅',
  '😅',
  '😆',
  '😆',
];

export const shuffledEmotes = shuffle<string>(emojis);
