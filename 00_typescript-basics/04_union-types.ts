type StringOrNum = string | number;

let userID: StringOrNum = 'abc1';
userID = 123;

// This will raise an error.
// userID = true;
