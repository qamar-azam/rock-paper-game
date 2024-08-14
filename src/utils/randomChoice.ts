import { Choice } from '../types/game';

export const randomChoice = (): Choice => {
  const choices: Choice[] = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
