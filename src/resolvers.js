import {users} from './db'

const resolvers = {
  Query: {
    bye: () => "Bye World",
    hello: () => "Hello World!",
    user: (parent, { id }, context, info) => {
      return users.find(user => user.id === id);
    },
    users: (parent, args, context, info) => {
      return users;
    }
  }
};

export default resolvers;