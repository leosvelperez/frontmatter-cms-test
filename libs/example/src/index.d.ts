declare function Example<T extends object>(props: {
  text: string;
  x: T;
  y: keyof T;
}): unknown;

export { Example };
