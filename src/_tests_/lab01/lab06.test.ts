import { celciusToFahnereite } from '../../lab01/lab06'

describe('celciusToFahnereite', () => {
    test('celciusToFahnereite deve retornar 89.6', () => {

        //Arrange
        const celcius = 32;
        const expected = 89.6;
        //Act
        let result = celciusToFahnereite(celcius);
        //Assert
        expect(result).toBe(expected);
    });
});