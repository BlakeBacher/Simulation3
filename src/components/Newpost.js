import React, { Component } from 'react';
import Nav from './Nav'
// import { connect } from 'net';
import axios from 'axios'

export default class Newpost extends Component {
    constructor(){
        super()

        this.state = {
            title:'',
            image:'',
            content:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.addpost = this.addpost.bind(this)
    }


    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    addpost(){
        let body = {
            title: this.state.title,
            image: this.state.image,
            content: this.state.content
        }
        axios.post('/api/addpost', body).then(()=> {
            this.props.history.push('/dashboard')
        })
    }

  


    render() {
        return (
            <div>
                <Nav/>
                <h1>Newpost</h1>
                <p>Title:</p>
                <input name = 'title' value = {this.state.title} onChange = {this.handleChange}/>
                {/* <img/> */}
                <p>Image URL:</p>
                <input name = 'image' value = {this.state.image} onChange = {this.handleChange}/>
                <p>Content:</p>
                <input name = 'content' value = {this.state.content} onChange = {this.handleChange}/>
                <br/>
                <button onClick = {this.addpost}>Post</button>
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     console.log('This is redux Stores State: ', state)
//     return{
//         title:'',
//         image:'',
//         content:''
//     }
// }

// export default connect(mapStateToProps, {})