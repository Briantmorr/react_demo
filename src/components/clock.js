import React, {Component} from 'react';
import {connect} from 'react-redux';
import {tick} from '../actions';

class Clock extends Component {
    componentDidMount(){
        setInterval(this.props.tick, 1000);
    }
    render(){
        return (
            <div>
                <h1>{this.props.time}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        time:state.clock.currentTime
    };
}

export default connect(mapStateToProps, {tick})(Clock);