let userList = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
  { id: 2, firstName: "Jane", lastName: "Doe", email: "jane@example.com" },
  {
    id: 3,
    firstName: "Joanna",
    lastName: "Smith",
    email: "joanna@example.com",
  },
  { id: 4, firstName: "Jack", lastName: "Black", email: "jack@example.com" },
  { id: 5, firstName: "James", lastName: "Bond", email: "james@example.com" },
  {
    id: 6,
    firstName: "Jill",
    lastName: "Valentine",
    email: "jill@example.com",
  },
  { id: 7, firstName: "Jake", lastName: "Peralta", email: "jake@example.com" },
  {
    id: 8,
    firstName: "Jessie",
    lastName: "Pinkman",
    email: "jessie@example.com",
  },
  { id: 9, firstName: "Joan", lastName: "Crawford", email: "joan@example.com" },
  { id: 10, firstName: "Jordan", lastName: "Poe", email: "jordan@example.com" },
];

const getUsers = async (search) => {
  const {
    page = 1,
    limit = 10,
    firstName = "",
    lastName = "",
    email = "",
  } = search;
  const users = userList.filter(
    (user) =>
      user.firstName.toLowerCase().includes(firstName.toLowerCase()) &&
      user.lastName.toLowerCase().includes(lastName.toLowerCase()) &&
      user.email.toLowerCase().includes(email.toLowerCase())
  );
  return paginateUsers(users, parseInt(page), parseInt(limit));
};

const paginateUsers = (users, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return {
    users: users.slice(startIndex, endIndex),
    pagination: {
      page,
      limit,
      total: users.length,
    },
  };
};

const getUserById = async (id) => {
  return userList.find((user) => user.id === id);
};

const createUser = async (userData) => {
  const newUser = {
    id: users.length + 1,
    ...userData,
  };
  userList.push(newUser);
  return newUser;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
