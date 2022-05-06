import React, { lazy } from "react";
import Layout from '../components/shared/Layouts'

import { UserContext } from "../auth";
import { useNavigate } from "react-router-dom";
import { UPDATE_USER } from '../graphql/perfil/mutation'
import { useMutation } from "@apollo/client";


export default function PerfilPage(){
    
    const navigate = useNavigate();
    const { currentUser } = React.useContext(UserContext);
    const [name, setName] = React.useState(currentUser.name);
    const image = React.useRef();
    const [ updateUser ] = useMutation(UPDATE_USER);

    console.log(currentUser);

    async function handleClickSalvar(){

        let url = await uploadImage(image.current.files[0]);
        
        updateUser({ variables: {
            id: currentUser.id,
            name: name, 
            image: url
        }});

        navigate('/');
    };

    async function uploadImage(imagem){
       
        const formData = new FormData();
        formData.append('file', imagem);
        formData.append('upload_preset', 'senacgram');
        formData.append('cloud_name','joaohamasaki');
        const response = await fetch('',{
            method: 'POST',
            accept: 'application/json',
            body: formData

        });
        const bodyJson = await response.json();

        return bodyJson.url;
    }

    return(
        <>
            <Layout>
                <div>
                    <h1>Perfil</h1>
                    <div style={{ display: 'block'}}>
                        <input type="text" className="form-control mb-3 w-50 m-auto" placeholder="Usuário" value={name} onChange={(event) => setName(event.target.value)}/>
                        <input type="file"  className='form-control my-2 w-50 m-auto' ref={image}/>
                    </div>
                    <button className="btn btn-primary" onClick={handleClickSalvar}>Salvar</button>
                </div>
            </Layout>
        </>
        
    );
};