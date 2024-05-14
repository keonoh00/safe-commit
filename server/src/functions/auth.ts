const FAKE_DB = [
  {
    username: "admin",
    password: "admin",
  },
];

export const checkUserDB = async (email: string, password: string) => {
  return FAKE_DB.find((user) => user.username === email && user.password === password);
};
