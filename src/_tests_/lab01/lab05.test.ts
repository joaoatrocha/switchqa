import { calcularHipotenusa } from '../../lab05'

describe('calcularHipotenusa', () => {
    test('calcularHipotenusa deve retornar 5', () => {
        //Arrange
        const cateto1 = 3;
        const cateto2 = 4;
        const expected = 5;
        //Act
        let result = calcularHipotenusa(cateto1, cateto2);
        //Assert
        expect(result).toBe(expected);
    });
});