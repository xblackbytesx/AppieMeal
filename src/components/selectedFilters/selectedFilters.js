import React, { Component } from 'react';

export default class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div className="filters">
                {Object.keys(this.props.filters).map((keyName, index) => {
                    return ( 
                        <div key={index}>
                            {keyName} {this.props.filters[keyName] || 'nothing selected'}
                            <input style={ {"border": "1px solid black"}} type="text" onChange={(e) => { 
                                this.props.changeFilter(this.props.day, keyName, e.target.value)
                            }} />
                        </div>
                    )
                })}
            </div>
        )
    }
}