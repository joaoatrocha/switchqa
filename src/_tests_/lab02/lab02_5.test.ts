import { isEven } from "../../lab02/lab02_5";

describe('isEven', () => {
  it('deve retornar verdadeiro com num pares', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(100)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-2)).toBe(true);
  });

  it('deve retornar falso com num impares', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(101)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});