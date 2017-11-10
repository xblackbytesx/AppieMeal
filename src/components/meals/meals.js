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
                    {this.props.meals.length && <Swing
                        className="stack"
                        tagName="div"
                        setStack={(stack)=> this.setState({stack:stack})}
                        ref="stack"
                    >
                        {this.props.meals.map((meal, i) => {
                            return (
                                <article className="card" key={i}
                                        throwoutright={(e) => {
                                            this.props.selectMeal(this.props.day, this.props.meals[i])
                                        }}
                                        throwoutleft={(e) => {
                                            this.props.dislikeMeal(this.props.meals[i])
                                        }}
                                    >
                                    <figure>
                                      <img src={`/${meal.image}`} />
                                    </figure>
                                    <section className="card__title">
                                      <h1>{meal.name}</h1>
                                    </section>
                                </article>
                            )
                        })}
                    </Swing>}
                </div>
            </div>
        )
    }
}
