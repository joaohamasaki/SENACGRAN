import { v4 as uuid } from 'uuid';

const user = {
    name: "João Hamasaki",
    username: "joaohamasaki",
    img: "https://tntsports.com.br/__export/1589320646980/sites/esporteinterativo/img/2020/05/12/ronaldinho_barxa.jpg_371192811.jpg",
    id: uuid()
}

export function getPost(){
    return {
        id: uuid(),
        user: user,
        text: "ALELUIA",
        img: 'https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg',
        likes: 3581,
        comments: [{
            user: user,
            text: "ALELUIAAAAAA!"
        },{
            user: user,
            text: '@joaohamasaki'
        }]
    }
}