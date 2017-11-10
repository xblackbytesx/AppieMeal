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
            {this.props.filterValue || '400'}
          </span>
        </button>

        <div className="filter-controls">
          {this.props.filterName === 'price' &&

          <div className="price">
            <h2>Wat is je budget?</h2>

            <div className="current-value-wrapper">
                <span className="current-value">
                  { this.props.filterValue }
                </span>

              <span className="value-unit">
                  Euro
                </span>
            </div>

            <div className="slider-wrapper">
              <ReactSlider defaultValue={this.props.filterValue} min={5} max={50} onChange={(e) => this.props.changeHandler(this.props.day, this.props.filterName, e)} />
            </div>

            <a onClick={()=> this.toggleState()} >OK</a>
          </div>
          }


          {this.props.filterName === 'people' &&

          <div className="people">
            <h2>Hoeveel personen eten mee?</h2>

            <div className="current-value-wrapper">
                <span className="current-value">
                  { this.props.filterValue }
                </span>

              <span className="value-unit">
                  Personen
                </span>
            </div>

            <div className="slider-wrapper">
              <ReactSlider defaultValue={this.props.filterValue} min={1} max={6} onChange={(e) => this.props.changeHandler(this.props.day, this.props.filterName, e)} />
            </div>

            <a onClick={()=> this.toggleState()} >OK</a>
          </div>
          }

          {this.props.filterName === 'time' &&
            <div className="time">
              <h2>Hoe lang wil je maximaal bezig zijn?</h2>

              <div className="current-value-wrapper">
                <span className="current-value">
                  { this.props.filterValue }
                </span>

                <span className="value-unit">
                  Minuten
                </span>
              </div>

              <div className="slider-wrapper">
                <ReactSlider defaultValue={this.props.filterValue} min={6} max={100} onChange={(e) => this.props.changeHandler(this.props.day, this.props.filterName, e)} />
              </div>

              <a onClick={()=> this.toggleState()} >OK</a>
            </div>
           }
        </div>

      </div>
    )
  }
}
