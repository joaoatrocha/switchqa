function celciusToFahnereite(celcius: number): number {

  let fahnereit: number = 32 + (9 / 5) * celcius;
  return fahnereit;
}

console.log(32);

export { celciusToFahnereite };