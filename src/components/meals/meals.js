import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Swing, { Stack, Card, Direction } from 'react-swing';

export default class Wrapper extends Component {

    constructor(props, context) {
        super(props, context);

        // An instance of the Stack
        this.state = {
            stack: null
        };
    }
    
    render() {
        return (
            <div>
                <div id="viewport">
                    {/*
                        Swing Element
                    */}
                    <Swing
                        className="stack"
                        tagName="div"
                        setStack={(stack)=> this.setState({stack:stack})}
                        ref="stack"
                    >
                        {this.props.meals.map((meal, i) => {
                            return (
                                <div className="card" key={i} throwoutright={(e) => 
                                        this.props.selectMeal(this.props.day, meal)
                                    }>
                                    <img src="https://static.ah.nl/static/recepten/img_078555_890x594_JPG.jpg" />
                                    <h2>{meal.name}</h2>
                                </div>
                            )
                        })}
                    </Swing>
                </div>
            </div>
        )
    }
}