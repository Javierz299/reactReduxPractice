import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class header extends Component {
    state = {
        nums: [{id: 1},{id: 2}, {id: 3}]
     }
 

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                {this.state.nums.map(num => 
                <Link key={num.id} to={{pathname: '/component/' + num.id}}>Component{num.id}</Link>
                )}
                
            </div>
        )
    }
}

export default header
