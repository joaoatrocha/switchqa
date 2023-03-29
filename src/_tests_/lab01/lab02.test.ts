import { precoRamo } from "../../lab01/lab02";

describe('precoRamo', () => {
    test('precoRamo deve retornar 5', () => {
        //Arrange
        const qtdRosas = 1;
        const qtdTulipas = 3;
        const precoRosas = 2;
        const precoTulipas = 1;
        const expected = 5;
        //Act
        let result = precoRamo(qtdRosas, qtdTulipas, precoRosas, precoTulipas);
        //Assert
        expect(result).toBe(expected);
    })
})