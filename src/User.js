import React, { useState } from 'react';
import axios from 'axios';

function User(){
    const [id, setid] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setusername] =useState('');
    const [image_name, setimage_name]=useState('');

    const getUserData=function(){
        console.log("valittu id="+id);
        setLoading(true);
        setIsError(false);
        axios.get('http://localhost:3000/user/'+id, {
        })
            .then(res => {
                setLoading(false);
                console.log(res.data.username);
                console.log(res.data.image_name);
                setusername(res.data.username);
                setimage_name("http://localhost:3000/images/"+res.data.image_name);
            }).catch(err => {
                setLoading(false);
                setIsError(true);
            });
    }

    return (
        <div>
            <h1>Käyttäjätiedot</h1>
            <label>Anna käyttäjän id</label> <br/>
            <input onChange={e=>setid(e.target.value)}></input> <br/>
            <button onClick={getUserData}>Etsi</button>
            <hr/>
            <label>Käyttäjätunnus={username}</label>
            <br/>
            <img src={image_name} width="200"/>
        </div>
    );
}

export default User;