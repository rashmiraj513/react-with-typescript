type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';

// This will raise an error because this is not permitted value.
// role = 'abc';
