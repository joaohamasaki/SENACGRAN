import { gql } from '@apollo/client';

export const UPDATE_USER = gql `
        mutation MyMutation($id: uuid!, $name: String!, $image: String!) {
            update_user(where: {id: {_eq: $id}}, _set: {name: $name, image: $image}) {
            returning {
                id
                image
                name
            }
            }
        }
`;

