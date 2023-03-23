function totalMinutos(horas: number, minutos: number): number {
  const total = horas * 60 + minutos;
  return total;
}

    let Horas: number = 16;
    let Minutos: number = 20;

    let MinutosTotais: number = Horas * 60 - Minutos;

console.log("" + MinutosTotais + "minutos");

export { totalMinutos };  