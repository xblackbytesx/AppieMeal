import React, { Component } from 'react';

export default class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div className="filters">
                {JSON.stringify(this.props.filters)}

                <button onClick={() => this.props.changeFilter(this.props.day, 'price', 5)}>change price to 5</button>
            </div>
        )
    }
}