import { celciusToFahnereite } from '../../lab06'

describe('celciusToFahnereite', () => {
    test('celciusToFahnereite deve retornar 50', () => {

        //Arrange
        const celcius = 10;
        const expected = 50;
        //Act
        let result = celciusToFahnereite(celcius);
        //Assert
        expect(result).toBe(expected);
    });
});