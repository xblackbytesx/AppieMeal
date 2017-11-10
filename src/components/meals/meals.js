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
                 <article className="card" >
                 <figure>
                 <img src={`/${meal.image}`} />
                 </figure>
                 <section className="card__title">
                    <h1>{meal.name}</h1>
                 </section>
                 </article>
                 <article className="card" >
                 <figure>
                 <img src={`/${meal.image}`} />
                 </figure>
                 <section className="card__title">
                     <h1>{meal.name}</h1>
                 </section>
                 </article>
                 )
             })}
             }
            </div>
        )
    }
}
