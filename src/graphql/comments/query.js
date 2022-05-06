import { gql } from '@apollo/client'

export const COMMENTS_POST = gql`
    query COMMENTS_POST($post_id: uuid!){
        comments(where: {post_id: {_eq: $post_id}}) {
        comment
        }
    }
`;