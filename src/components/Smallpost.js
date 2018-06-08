import React from 'react';
import './Smallpost.css'
import {Link} from 'react-router-dom'

export default function Smallpost (props){

     return(
         <div className = 'smallpost'>
             <Link to = {`/viewpost/:${props.id}`}>
                <h4>{props.title}</h4> 
            </Link>
        </div>
     )
}