import React, { Component } from 'react'
import {  Link } from 'react-router-dom';
import axios from 'axios'


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            email : "",
            password : "",
            errMessage : "",
        };
    }
    handleUserLogin (token){
        return token;
    }
     loginHandle(){
        let cred = {"email":this.state.email, "password":this.state.password};
        axios.post("https://jobs-api.squareboat.info/api/v1/auth/login",cred).then(
            res =>{
                console.log(res);
               localStorage.setItem('token',res.data.data.token)
               this.props.loginUser(this.handleUserLogin(res.data.data.token));
            })
            .catch(err =>{
                console.log(err);
                this.setState({errMessage:"Incorrect Email or Password"})
            })
        
    }
    render() {
        return (
            <div className="container">
                <h4>Login</h4>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" onChange={(e)=> this.setState({email:e.target.value})} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password"  onChange={(e)=> this.setState({password:e.target.value})} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                <label className="error">{this.state.errMessage}</label><br/>
                    <button type="submit" className="btn btn-primary first-btn" onClick={()=> this.loginHandle()}>Login</button>
                    <Link className="btn btn-primary" to={'/register'}>Register</Link>
                </div>
            </div>
        )
    }
}
