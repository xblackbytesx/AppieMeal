import React, { Component } from 'react';

export default class Filter extends Component {

  constructor(props, context) {
    super(props, context);
  }

  state = {
    isOpen: false
  };

  toggleState() {
    this.setState({isOpen: !this.state.isOpen})
  }

  render() {
    const controlsOpen = this.state.isOpen ? 'controls--open' : '';

    console.log(this.props.filterName, this.props.filterValue);

    return (
      <div className={controlsOpen}>
        <button className={`pill-button pill-button--${this.props.filterName} pill-button--${this.props.filterValue ? 'active' : 'inactive'}`} onClick={()=> this.toggleState()}>
          <span className="pill-button__value">
            {this.props.filterValue || '.'}
          </span>
        </button>

        <input className="pill-button__controls" type="text" onChange={(e) => {
          this.props.changeFilter(this.props.day, this.props.filterName, e.target.value)
        }} />
      </div>
    )
  }
}
