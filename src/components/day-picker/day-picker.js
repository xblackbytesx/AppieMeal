import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'

export default class DayPicker extends Component {
  render() {
    return (
      <div className="daypicker">
        {/*<IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>*/}
        {/*{' · '}*/}
        {/*<Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>*/}
        <Link to='/meal/zaterdag' activeClassName='page-layout__nav-item--active'>Za</Link>
        <Link to='/meal/zondag' activeClassName='page-layout__nav-item--active'>Zo</Link>
        <Link to='/meal/maandag' activeClassName='page-layout__nav-item--active'>Ma</Link>
        <Link to='/meal/dinsdag' activeClassName='page-layout__nav-item--active'>Di</Link>
        <Link to='/meal/woensdag' activeClassName='page-layout__nav-item--active'>Wo</Link>
        <Link to='/meal/donderdag' activeClassName='page-layout__nav-item--active'>Do</Link>
        <Link to='/meal/vrijdag' activeClassName='page-layout__nav-item--active'>Vr</Link>
      </div>
    )
  }
}
