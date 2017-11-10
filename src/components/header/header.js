import headerImg from '../../img/appie-meal-title.svg'
import SettingsButton from '../../components/settings-button/settings-button'
import CartButton from '../../components/cart-button/CartButtonContainer'
import { browserHistory } from 'react-router'

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <SettingsButton/>
        <img onClick={() => browserHistory.push('/meal/zaterdag')}src={headerImg} alt="AppieMeal"/>
        <CartButton/>
      </header>
    )
  }
}
