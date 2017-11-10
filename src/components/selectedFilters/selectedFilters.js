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
                            <button className={`pill-button pill-button--${keyName} pill-button--${this.props.filters[keyName] ? 'active' : 'inactive'}`}>
                              <span className="pill-button__value">
                                {this.props.filters[keyName] || '.'}
                              </span>
                            </button>
                            <input style={{"border": "1px solid black"}} type="text" onChange={(e) => {
                                this.props.changeFilter(this.props.day, keyName, e.target.value)
                            }} />
                        </div>
                    )
                })}
            </div>
        )
    }
}
