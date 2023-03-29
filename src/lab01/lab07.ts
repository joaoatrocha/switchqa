function totalMinutos(horas: number, minutos: number): number {
  const total = horas * 60 + minutos;
  return total;
}

console.log(totalMinutos(1, 20));

export { totalMinutos };