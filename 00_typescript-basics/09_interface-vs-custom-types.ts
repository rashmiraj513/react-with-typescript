type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

interface Credentials {
  password: string;
  email: string;
  mode: string;
}

// One difference between interface and custom type is that we can implement the interfaces.
class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
  mode: string;
}
