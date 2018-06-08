import React, { Component } from 'react';
import Nav from './Nav'

export default class Viewpost extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            image:'',
            content:'',
            author:'',
            authorPicture:''
        }
    }
    render() {
        return (
            <div>
                <Nav/>
                <h1>Viewpost</h1>
            </div>
        )
    }
}