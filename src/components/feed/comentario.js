import React from 'react';
import { UserContext } from '../../auth'
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from '../../graphql/comments/mutation';


export default function Comentario({isNewComentario, id}){

    const { currentUser } = React.useContext(UserContext)
    const [comentario, setComment] = React.useState("");
    const [post_id, setPostId] = React.useState(id);
    const [ addComment ] = useMutation(ADD_COMMENT);

    
    
    if(isNewComentario){
        if(!document.getElementById('comentarios').classList.contains('show')){
            new window.bootstrap.Modal(document.getElementById('comentarios')).show()
        }
    }

    function handleClickComentar(){
        
        addComment({ variables: {
            comment: comentario, 
            post_id: post_id, 
            user_id: currentUser.id}});
    }

    return(
        <div className="modal" tabIndex="-1" id='comentarios'>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Comentar...</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="text" placeholder='Digite um comentário...' className='form-control my-2' value={comentario} onChange={(event)=>setComment(event.target.value)}/>
                    <input type="hidden" id={'hidden' + post_id} value={post_id} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    <button type="button" className="btn btn-primary" onClick={handleClickComentar}>Comentar</button>
                </div>
                </div>
            </div>
        </div>
    );
}