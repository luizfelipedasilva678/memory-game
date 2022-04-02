export function swap<T>(array: Array<T>, a: number, b: number) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
