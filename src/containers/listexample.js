import React, { Component } from 'react'

class containers1 extends Component {
  state = {
      value: '',
  }



    arr1 = [
        {id: 1, txt: "text 1", number: 1},
        {id: 2, txt: "text 2", number: 2},
        {id: 3, txt: "text 3", number: 3},
        {id: 4, txt: "text 4", number: 4},
        {id: 5, txt: "text 5", number: 4},
    ]

    lists = (props) => (
    <div>
        {props.item.txt}
    <p>{props.item.number}</p>
    </div>
    )
        handleSubmit = (e) => {
            e.preventDefault()

           console.log(this.state.value)

        }

        handleChange = (e) => (
            this.setState({
                value: e.target.value
            })
        )


    render() {
        return (
            // <div>
            //     {this.arr1.map(item => (
            //         <this.lists key={item.id} item={item} />
            //     ))}
            // </div>
            <div>
                <div>{this.state.value}</div>
                <form onSubmit={this.handleSubmit}>
                    <label >Name:</label>
                    <input id="name" onChange={this.handleChange} type="text" />
                    <button type="submit">Submit</button>
                </form>
            
            </div>
        )
    }
}

export default containers1

