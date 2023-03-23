import { calcularHipotenusa } from '../../lab05'

describe('calcularHipotenusa', () => {
    test('calcularHipotenusa deve retornar 10.816653826391969', () => {
        //Arrange
        const cateto1 = 6;
        const cateto2 = 9;
        const expected = 10.816653826391969;
        //Act
        let result = calcularHipotenusa(cateto1, cateto2);
        //Assert
        expect(result).toBe(expected);
    });
});