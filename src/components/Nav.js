import React from 'react';
import './Nav.css'
import {Link} from 'react-router-dom'


export default function Nav (){
     return(
        <div className = 'nav'>
            <h1>Nav</h1>

            <Link to = '/dashboard'>
                <button className=''>Home</button>
            </Link>

            <br/>

            <Link to = '/newpost'>
                <button className=''>Create Post</button>
            </Link>

            <br/>
            
            <a href = 'http://localhost:3030/auth/logout'>
                <button className=''>LogOut</button>
            </a>

        </div>
     )
}

