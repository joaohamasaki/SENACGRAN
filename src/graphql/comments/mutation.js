import { gql } from '@apollo/client';

export const ADD_COMMENT = gql `
        mutation ADD_COMMENT($comment: String!, $post_id: uuid!, $user_id: uuid!) {
            insert_comments(objects: {comment: $comment, post_id: $post_id, user_id: $user_id}) {
            returning {
                comment
                id
                post_id
                user_id
                user {
                name
                }
            }
            }
        }
        
`;

