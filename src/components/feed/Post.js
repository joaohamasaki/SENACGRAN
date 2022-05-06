import React from 'react';
import Comment from './Comment';
import { useMutation } from "@apollo/client";
import { LIKE } from '../../graphql/post/mutation';
import  Comentario  from './comentario';

export default function Post({ post }){
    const [ Likes ] = useMutation(LIKE);

    const [isNewComment, setIsNewComment] = React.useState(false);
    const [isIdPost, setIsIdPostt] = React.useState(post.id);

    function handleClickLikes(post){

        Likes({ variables: {
            id: post.id, 
            likes: post.likes + 1 }});

    }
    return (
        <article style={{ "maxWidth" : '700px' }} className='mx-auto my-3 border rounded-1'>
            <div className='text-start m-3'>
                <img src={post.user.image} className="rounded-circle" style={{'maxWidth':40, 'maxHeight':40}} />
                <span className='mx-2 fw-bold'>{post.user.name}</span>
            </div>
            <div>
                <img src={post.image} className="img-fluid" />
            </div>
            <div className='text-start m-3'>
                <div>
                    <a style={{ "cursor" : 'pointer' }} onClick={(event) => {handleClickLikes(post)}} >
                                <i className="fa-regular fa-heart fs-4 me-2"></i>
                        </a>
                        <a style={{ "cursor" : 'pointer' }} onClick={()=>setIsNewComment(!isNewComment)}>
                            <i className="fa-regular fa-comment-dots fs-4"></i>
                            <Comentario isNewComentario={isNewComment} id={isIdPost}/>
                        </a>
                </div>
                <div>
                    <span className='d-block fw-bold'>{ post.likes == 1 ? `${post.likes} like` : `${post.likes} likes`}</span>
                    <span className='fw-bold'>{post.user.name}: </span>
                    <span>{post.text}</span>
                        { post.comments.length > 0 &&
                    <div>
                        <span className='fw-light text-muted fs-6'>Todos os comentários ({post.comments.length})</span>
                    </div>}
                        {post.comments.map((comment)=> <Comment key={comment.id} comment={comment} />)}
                        
                </div>
            </div>
        </article>);
}