const add = (a: number, b: number) => {
  const result = a + b;
  return result;
};

type AddFn = (a: number, b: number) => number;

const calculate = (a: number, b: number, calcFn: AddFn) => {
  calcFn(a, b);
};

calculate(2, 5, add);
