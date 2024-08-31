// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

// This will raise an error.
// user = 'Max';

user = {
  name: 'Max',
  age: 34,
  isAdmin: true,
  id: 'abc', // 123
};
