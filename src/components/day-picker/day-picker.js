import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'

export default class DayPicker extends Component {
  render() {
    const days = ['zaterdag', 'zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag']
    return (
      <div className="daypicker">
        {days.map((day, i) => {
          return (
            <Link key={i} to={`/meal/${day}`} className={`${this.props.selectedMeals[day] ? 'has--meal' : ''}`}activeClassName='page-layout__nav-item--active'>{day.substring(0, 1).toUpperCase() + day.substring(1, 2)}</Link>
          )
        })}
      </div>
    )
  }
}
