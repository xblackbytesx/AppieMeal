import React, { Component } from 'react';
import ReactSlider from 'react-slider'

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

    return (
      <div className={controlsOpen}>
        <button className={`pill-button pill-button--${this.props.filterName} pill-button--${this.props.filterValue ? 'active' : 'inactive'}`} onClick={()=> this.toggleState()}>
          <span className="pill-button__value">
            {this.props.filterValue || '.'}
          </span>
        </button>

        {this.props.filterName === 'people' && <ReactSlider defaultValue={this.props.filterValue} min={1} max={6} onChange={(e) => this.props.changeHandler(this.props.day, this.props.filterName, e)} />}
        {this.props.filterName === 'time' && <ReactSlider defaultValue={this.props.filterValue} min={10} max={100} onChange={(e) => this.props.changeHandler(this.props.day, this.props.filterName, e)} />}
      </div>
    )
  }
}
