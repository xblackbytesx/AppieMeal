import headerImg from '../../img/appie-meal-title.svg'
import SettingsButton from '../../components/settings-button/settings-button'
import CartButton from '../../components/cart-button/CartButtonContainer'

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <SettingsButton/>
        <img src={headerImg} alt="AppieMeal"/>
        <CartButton/>
      </header>
    )
  }
}
