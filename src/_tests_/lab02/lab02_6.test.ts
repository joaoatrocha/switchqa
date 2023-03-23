import { respetivaFunção } from "../../lab02/lab02_6";

describe("Testes - Exercício 6", () => {
    test("Teste 1", () => {
        expect(respetivaFunção(5)).toBe(15);
    });
    test("Teste 2", () => {
        expect(respetivaFunção(0)).toBe(0);
    });
    test("Teste 3", () => {
        expect(respetivaFunção(-5)).toBe(-5);
    });
    });