import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="reactangle">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 offset-md-1">
                                <h1>Welcome to </h1>
                                <h1>MyJobs</h1>
                            </div>
                            <div className="col-md-6 offset-md-1">
                                <img src="https://www.urban.org/sites/default/files/styles/feature2_full_hero/public/feature2/jobs-feature-header-1700x700.png?itok=8lB15_K3"></img>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <h2>Why Us</h2>
                    <div className="row">
                        <div className="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div class="card" >
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
