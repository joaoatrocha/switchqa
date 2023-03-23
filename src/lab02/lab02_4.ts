// Operadores de divisão(*)
// INICIO(numero: INTEIRO)
// ED:digito1, digito2, digito3 INTEIRO
//  SE (numero <100 OU numero >999) ENTÃO
//      ESCREVER(“Número não tem 3 dígitos”)
//      digito1 <--1
// SENÃO
//      digito3<-numero MOD 10
//      digito2<-(numero DIV 10) MOD 10
//      digito1<-(numero DIV 100) MOD 10
// FIM_SE
// RETORNAR(digito1)

// b) Implemente o algoritmo numa função.
// Math.floor = arredonda para baixo

export function obterDigito(numero: number): number {
    let digito1: number;
    let digito2: number;
    let digito3: number;
  
    if (numero < 100 || numero > 999) {
      console.log("Número não tem 3 dígitos");
      digito1 = -1;
    } else {
      digito3 = numero % 10;
      digito2 = Math.floor((numero / 10) % 10);
      digito1 = Math.floor(numero / 100) % 10;
    }
  
    return digito1;
  }
  
  console.log(obterDigito(123));