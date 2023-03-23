import { mediaPesada } from '../../lab02/lab02_1';

describe('mediaPesada', () => {
  it('calculates the weighted average correctly', () => {
    const nota1 = 8;
    const nota2 = 10;
    const nota3 = 12;
    const peso1 = 0.4;
    const peso2 = 0.3;
    const peso3 = 0.3;

    // Act
    const result = mediaPesada(nota1, nota2, nota3, peso1, peso2, peso3);

    // Assert
    expect(result).toBe(9.8);
  });
});
