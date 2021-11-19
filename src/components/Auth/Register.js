import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state ={
            email : "",
            password : "",
            name : "",
            confirmPassword : "",
            skills : "",
            userRole: 0,
        };
    }
    registerHandle(){
        let data = {"email":this.state.email, "password":this.state.password, "name":this.state.name, 
                    "confirmPassword":this.state.confirmPassword, "userRole":this.state.userRole, "skills":this.state.skills};
                    console.log(data);
                    axios.post(" https://jobs-api.squareboat.info/api/v1/auth/register",data).then(
                        res =>{
                            console.log(res);
                        }
                    )
    }
    render() {
        return (
            <div className="container">
                <h4>Register</h4>
                <div className="form-group">
                    <label >Full Name</label>
                    <input type="text" onChange={(e)=> this.setState({name:e.target.value})} className="form-control"  placeholder="Enter your full name"/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" onChange={(e)=> this.setState({email:e.target.value})} className="form-control"  placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password"  onChange={(e)=> this.setState({password:e.target.value})} className="form-control"  placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password"  onChange={(e)=> this.setState({confirmPassword:e.target.value})} className="form-control"  placeholder="Enter your password"/>
                </div>
                <div className="form-group">
                    <label >Skills</label>
                    <input type="text"  onChange={(e)=> this.setState({skills:e.target.value})} className="form-control"  placeholder="Enter your skills"/>
                </div>  <br/>
                <button type="submit" className="btn btn-primary first-btn" onClick={()=> this.registerHandle()}>Register</button>
                <Link className="btn btn-primary" to={'/login'}>Login</Link>
            </div>
        )
    }
}
