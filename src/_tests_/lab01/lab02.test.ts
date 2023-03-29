import { precoRamo } from "../../lab01/lab02";
describe("precoRamo", () => {
    test("precoRamo(10, 20, 5, 3) = 230", () => {
        //arrange
        const qtdRosas = 10;
        const qtdTulipas = 20;
        const precoRosas = 5;
        const precoTulipas = 3;
        const expected = 110;
        //act
        const result = precoRamo(qtdRosas, qtdTulipas, precoRosas, precoTulipas);
        //assert
        expect(result).toBe(expected);
    });
});