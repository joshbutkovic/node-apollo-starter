import { ApolloServer, gql } from 'apollo-server';
import schema from './schema';

const books = require('./books');

const typeDef = gql`
    type Query
`;

const server = new ApolloServer({
    typeDefs: [typeDef, books.typeDef],
    resolvers: [books.resolvers],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

export default server;
