import React, { Component } from 'react'
import axios from 'axios'

export default class ForgotPassword extends Component {
    constructor(props){
        super(props);
        this.state ={
            email : "",
            errMessage : "",
        };
    }
    forgotPasswordHandle(){
            axios.get("https://jobs-api.squareboat.info/api/v1/auth/resetpassword?email="+this.state.email).then(
                res =>{
                    console.log(res);
                    axios.get("https://jobs-api.squareboat.info/api/v1/auth/resetpassword/"+res.data.data.token).then(
                        resp =>{
                            console.log(resp);
                        })
                        .catch(error =>{
                            console.log(error);
                        })
                })
                .catch(err =>{
                    console.log(err);
                    this.setState({errMessage:"Please enter a valid Email"})
                })
    }
    render() {
        return (
            <div className="container">
            <h4>Forgot your password?</h4>
            <label>Enter the email associated with your account and we'll send you instructions to reset your password</label>
                <div className="form-group">
                    <label >Email address</label>
                    <input type="email" onChange={(e)=> this.setState({email:e.target.value})} className="form-control" placeholder="Enter email"/>
                </div>
                <label className="error">{this.state.errMessage}</label><br/>
                <button type="submit" className="btn btn-primary" onClick={()=> this.forgotPasswordHandle()}>Submit</button>
            </div>
        )
    }
}
