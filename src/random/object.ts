export {};

Object.prototype.randomKey = function () {
  return Object.keys(this).random();
};

Object.prototype.randomValue = function () {
  return Object.values(this).random() as never;
};
