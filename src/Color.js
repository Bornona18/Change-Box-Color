import React from 'react';

class Color extends React.Component{
    constructor(props){
        super (props);
        this.state = {color:"red"};
        this.changeColor =this.changeColor.bind(this);

    }

    changeColor() {
        let pink = Math.floor (Math.random()* 300)
        let purple = Math.floor (Math.random()* 300)
        let blue = Math.floor (Math.random()* 300)

        console.log(this.state.color)
        this.setState({color:`rgb(${pink},${purple},${blue})`})
    }

    render() {
        return(
            <div id = "color" style= {{backgroundColor: this.state.color}}>
                <h2>Change My Color</h2>
                <button onClick ={this.changeColor}> Color Me!!!!!</button>
            </div>
        )
    }

}


export default Color;