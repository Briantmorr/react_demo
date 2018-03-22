import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { genRandomColor, genRandomPos } from '../helpers';
import BoxContainer from './boxContainer';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: [
                {
                    color: 'red',
                    pos: genRandomPos()
                },
                {
                    color: 'yellow',
                    pos: genRandomPos()
                },
                {
                    color: 'blue',
                    pos: genRandomPos()
                },
                {
                    color: 'teal',
                    pos: genRandomPos()
                },
                {
                    color: 'pink',
                    pos: genRandomPos()
                },

            ]
        };
        this.changeColor = this.changeColor.bind(this);
    }
    render() {
        const boxElements = this.state.boxes.map((item, index) => {
            return (
                <BoxContainer newColor={() => this.changeColor(index)}
                    color={item.color} pos={item.pos} key={index} />
            )
        });

        return (
            <div className='container'>
                <h1 className='text-center my-5'>Components Demo</h1>
                {boxElements}
            </div>
        )
    }
    changeColor(index) {
        const newBoxes = this.state.boxes.slice();
        newBoxes[index].pos = genRandomPos();
        newBoxes[index].color =genRandomColor();
        this.setState({
            boxes: newBoxes
        })
    }
}


export default App;
