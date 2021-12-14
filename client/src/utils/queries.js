import { gql } from '@apollo/client';

export const GET_USER = gql `
    query user {
        user(username: $username){
            _id
            username
            email
        }
    }
`;
