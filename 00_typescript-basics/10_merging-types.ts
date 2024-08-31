type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

// Merging Admin and AppUser types
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;

admin = {
  permissions: ['login'],
  userName: 'Max',
};
