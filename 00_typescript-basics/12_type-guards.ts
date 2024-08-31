type Role = 'admin' | 'user' | 'editor';

const performAction = (action: string | number, role: Role) => {
  if (role === 'admin' && typeof action === 'string') {
    // ...
  }
};
