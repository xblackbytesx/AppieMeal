import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'

export default class DayPicker extends Component {
  render() {
    return (
      <div className="daypicker">
        {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>*/}
        {/*{' · '}*/}
        {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>*/}
        <Link to='/meal/zaterdag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">za</span>
          <span className="day-num">13</span>
        </Link>
        <Link to='/meal/zondag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">zo</span>
          <span className="day-num">14</span>
        </Link>
        <Link to='/meal/maandag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">ma</span>
          <span className="day-num">15</span>
        </Link>
        <Link to='/meal/dinsdag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">di</span>
          <span className="day-num">16</span>
        </Link>
        <Link to='/meal/woensdag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">wo</span>
          <span className="day-num">17</span>
        </Link>
        <Link to='/meal/donderdag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">do</span>
          <span className="day-num">18</span>
        </Link>
        <Link to='/meal/vrijdag' activeClassName='page-layout__nav-item--active'>
          <span className="day-name">vr</span>
          <span className="day-num">13</span>
        </Link>
      </div>
    )
  }
}
