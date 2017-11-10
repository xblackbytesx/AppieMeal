import React, { Component } from 'react';
import Filter from '../../components/filters/filter'

export default class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="filters">
                {Object.keys(this.props.filters).map((keyName, index) => {
                    return (
                      <Filter key={index} day={this.props.day} changeHandler={this.props.changeFilter} filterValue={this.props.filters[keyName]} filterName={keyName} />
                    )
                })
              }
            </div>
        )
    }
}
