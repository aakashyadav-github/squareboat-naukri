import React, { Component } from 'react'
import {  Link } from 'react-router-dom';

export default class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state ={
            newPassword : "",
            confirmPassword : "",
            errMessage : "",
        };
    }
    resetHandle(){

    }
    render() {
        return (
            <div className="container">
            <h4>Reset Your Password</h4>
            <div className="form-group">
                <label >New Password</label>
                <input type="text" onChange={(e)=> this.setState({newPassword:e.target.value})} className="form-control"placeholder="Enter password"/>
            </div>
            <div className="form-group">
                <label >Confirm New Passowrd</label>
                <input type="text"  onChange={(e)=> this.setState({confirmPassword:e.target.value})} className="form-control" placeholder="Enter password"/>
            </div>
            <div className="form-group">
            <label className="error">{this.state.errMessage}</label><br/>
                <button type="submit" className="btn btn-primary first-btn" onClick={()=> this.resetHandle()}>Reset</button>
            </div>
        </div>
        )
    }
}
