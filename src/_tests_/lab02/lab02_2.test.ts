import { maiorOuIgual } from "../../lab02/lab02_2";

describe("Testes - maiorOuIgual", () => { 

    test("Teste 1", () => {
        expect(maiorOuIgual(8)).toBe(true);
    });

    test("Teste 2", () => {
        expect(maiorOuIgual(7)).toBe(false);
    });

    test("Teste 3", () => {
        expect(maiorOuIgual(9)).toBe(true);
    });

});