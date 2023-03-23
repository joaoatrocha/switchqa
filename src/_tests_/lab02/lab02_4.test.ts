import { obterDigito } from "../../lab02/lab02_4";

describe("Testes - Lab 02 - Exercício 4", () => {
    it("obterDigito(123) deve retornar 1", () => {
        expect(obterDigito(123)).toBe(1);
    });
    
    it("obterDigito(456) deve retornar 4", () => {
        expect(obterDigito(456)).toBe(4);
    });
    
    it("obterDigito(789) deve retornar 7", () => {
        expect(obterDigito(789)).toBe(7);
    });
    
    it("obterDigito(100) deve retornar 1", () => {
        expect(obterDigito(100)).toBe(1);
    });
    
    it("obterDigito(999) deve retornar 9", () => {
        expect(obterDigito(999)).toBe(9);
    });
    
    it("obterDigito(99) deve retornar 1", () => {
        expect(obterDigito(99)).toBe(1);
    });
    
    it("obterDigito(1000) deve retornar 1", () => {
        expect(obterDigito(1000)).toBe(1);
    });
    });