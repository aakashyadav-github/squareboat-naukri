import React, { Component } from 'react'

export default class JobCard extends Component {
    render() {
        return (
            <div>
                <div class="card" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="card-link first-btn">Card link</a>
                        <a href="#" class="btn btn-primary">View Applications</a>
                    </div>
                </div>
            </div>
        )
    }
}
