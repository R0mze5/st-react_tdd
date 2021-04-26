export function rubToUsd(value: number, course: number): number {
  return Number((value / course).toFixed(2));
}

export function usdToRub(value: number, course: number): number {
  return Number((value * course).toFixed(2));
}
