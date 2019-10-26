import { gql } from 'apollo-server';

export const typeDef = gql`
    type Book {
        title: String
        author: String
    }
    extend type Query {
        books: [Book]
    }
`;
