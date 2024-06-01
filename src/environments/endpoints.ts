const authMethod = {
  login: 'auth/local/',
};

const usersMethod = {
  register: 'clients',
  getTrainers: 'trainers',
};

export const host = {
  auth: {
    methods: authMethod,
  },
  users: {
    methods: usersMethod,
  },
};
