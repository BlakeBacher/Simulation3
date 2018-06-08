import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'


export default function Nav (){
     return(
        <div className = 'nav'>
            <div className = 'buts'>
            <Link to = '/dashboard'>
                <button className='b'>Home</button>
            </Link>

            <br/>

            <Link to = '/newpost'>
                <button className='b'>Create Post</button>
            </Link>

            <br/>
            
            <a href = 'http://localhost:3030/auth/logout'>
                <button className='b'>LogOut</button>
            </a>
            </div> 
        </div>
     )
}

