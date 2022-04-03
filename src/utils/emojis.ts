import { shuffle } from './shuffle';
import { IEmoji } from '../typings/Emojis';

const emojis: IEmoji[] = [
  { emoji: '😁', name: 'grinning-face-1' },
  { emoji: '😁', name: 'grinning-face-2' },
  { emoji: '😂', name: 'face-with-tears-1' },
  { emoji: '😂', name: 'face-with-tears-2' },
  { emoji: '😃', name: 'smiling-face-1' },
  { emoji: '😃', name: 'smiling-face-2' },
  { emoji: '😄', name: 'smiling-face-with-open-mouth-1' },
  { emoji: '😄', name: 'smiling-face-with-open-mouth-2' },
  { emoji: '😅', name: 'smiling-face-with-open-mouth-sweat-1' },
  { emoji: '😅', name: 'smiling-face-with-open-mouth-sweat-2' },
  {
    emoji: '😆',
    name: 'smiling-face-with-open-mouth-and-tightly-closed-eyes-1',
  },
  {
    emoji: '😆',
    name: 'smiling-face-with-open-mouth-and-tightly-closed-eyes-2',
  },
];

export const shuffledEmotes = shuffle<IEmoji>(emojis);
