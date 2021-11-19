import React, { Component } from 'react'
import './Home.css'
import {  Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: localStorage.getItem('token').length>0,
        }
    }
    
    render() {
        return (
            <div className="row navbar-row">
                <div className="col-md-2 offset-md-1"><Link  to={'/'} className="text-dec"><h2>MyJobs</h2></Link></div>
                <div className="col-md-2 offset-md-7">
                  {(this.state.isLoggedIn)&&
                    <button className="login-btn"><Link to={'/login'} className="text-dec">Login/Signup</Link></button>
                  }
                </div>
                <hr></hr>
            </div>
        )
    }
}
