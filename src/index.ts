export * from './random';

declare global {
  interface Array<T> {
    random(): T;
  }

  interface Object {
    randomKey(): string;
    randomValue(): never;
  }

  interface Set<T> {
    random(): T;
  }
}
