import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import Nav from './Nav'
import './Dashboard'
import axios from 'axios'
import Smallpost from './Smallpost'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            posts: [],
            search: '',
            userposts:true,
            filterstring:''
        }
    }

    componentDidMount(){
        axios.get('api/getposts').then((res) => {
            this.setState({
                posts: res.data
            })
        })
    }

    handleChange(filter){
        this.setState({filterstring:filter})
    }

    render() {
        // let { username, profile_pic } = this.props.user;
        // let poststodisplay = this.state.posts.filter((element,index) => {
        //     return element.includes(this.state.filterstring)
        // }).map((element,index) => {
        //     return <h2 Key = {index}>{element}</h2>
        // })
        let mappedposts = this.state.posts.map((element, i) => {
            return(
                <div key = {i}>
                    <Smallpost 
                        id = {element.id}
                        title = {element.title}
                        image = {element.image}
                        content = {element.content}/>
                </div> 
            )
        })
        return (
            <div>
            <Nav/>
                <div className = 'search'>
                    <input type='text' className='' placeholder= 'Search' onChange = {(e) => this.handleChange(e.target.value)}/>
                </div> 
                <div>
                    {mappedposts}
                </div>
            </div>
        )
    }
}