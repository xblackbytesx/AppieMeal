import React, { Component } from 'react'
import AnimateOnChange from 'react-animate-on-change'
import './cart-button.scss'
export default class CartButton extends Component {
  constructor(props) {
    super(props)
  }
  shouldComponentUpdate(nextprops) {
    const oldLength = this.props.ingredients && this.props.ingredients.length || 0
    const newLength = nextprops && nextprops.ingredients && nextprops.ingredients.length || 0
    return oldLength !== newLength
  }
  render() {
    return (
      <button className="header__button header__button--cart">
        <AnimateOnChange
          baseClassName="items"
          animationClassName="items--bounce"
          animate={this.props.ingredients.length !== 0}>
            {this.props.ingredients.length}
        </AnimateOnChange>
      </button>
    )
  }
}

