import { getRandomBetween } from './getRandomBetween';

Set.prototype.random = function () {
  return [...this][getRandomBetween({ min: 0, max: this.size })];
};
