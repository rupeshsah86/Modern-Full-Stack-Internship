import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

const PORT = 4005;
const app = express();

const users = [
  {
    id: 1,
    name: "Rupesh",
    email: "ru@gmail.com",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Ram",
    email: "raa@gmail.com",
    phone: "9876543310",
  },
  {
    id: 3,
    name: "Radhe",
    email: "ra@gmail.com",
    phone: "9876544410",
  },
  {
    id: 4,
    name: "Ritik",
    email: "ri@gmail.com",
    phone: "9876543200",
  },
];

async function startServer() {
  const typeDefs = `#graphql
    type User {
      id: ID!
      name: String!
      email: String!
      phone: String!
    }
    type Query {
      getUsers: [User]
    }
    type Mutation {
      createUser(name: String!, email: String!, phone: String!): User
      deleteUser(id: ID!): [User]
      updateUser(id: ID!,name :String!): User  

    }
  `;

  const resolvers = {
    Query: {
      getUsers: () => users,
    },
    Mutation: {
      createUser: (_, { name, email, phone }) => {
        const newUser = {
          id: users.length + 1,
          name,
          email,
          phone,
        };
        users.push(newUser);
        return newUser;
      },
      updateUser: (_, { id, email }) => {
        const user = users.find((user) => user.id === Number(id));
        if (!user) {
          throw new Error(`No user with ${id}`);
        }
        user.email = email;
        return user;
      },
      deleteUser: (_, { id }) => {
        const index = users.findIndex((user) => user.id === Number(id));
        if (index !== -1) {
          users.splice(index, 1);
        }
        return users;
      },
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  app.use(cors());
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}/graphql`);
  });
}

await startServer();
