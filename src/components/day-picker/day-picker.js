import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'

export default class DayPicker extends Component {
  render() {
    const days = ['zaterdag', 'zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag']
    return (
      <div className="daypicker">
        {days.map((day, i) => {
          return (
            <Link key={i} to={`/meal/${day}`} className={`${this.props.selectedMeals[day] ? 'has--meal' : ''} ${this.props.selectedMeals[day] === 'NO_MEAL' ? 'no--meal' : ''}`}activeClassName='page-layout__nav-item--active'>
              <span className="day-name">{day.substring(0, 2)}</span>
              <span className="day-num">{12 + i}</span>
              </Link>
          )
        })}
      </div>
    )
  }
}
