interface Credentials {
  password: string;
  email: string;
  mode: string;
}

let creds: Credentials;

creds = {
  password: 'abc',
  email: 'test@example.com',
  mode: 'offline',
};
