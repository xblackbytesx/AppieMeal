import { connect } from 'react-redux'
import React from 'react'

export const Favourites = (props) => (
    <div className="content-container">
        {props.meals.map((meal, i) => {
            return(
                 <div>
                     <article className="card">
                         <figure>
                             <img src={`/${meal.image}`} />
                         </figure>
                         <section className="card__title">
                            <h1>{meal.name}</h1>
                         </section>
                    </article>
                 </div>
            )
        })}
    </div>
  )

const mapStateToProps = (state) => ({
 meals: state.meals
})

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

    import { createSelector } from 'reselect'
    const counter = (state) => state.counter
    const tripleCount = createSelector(counter, (count) => count * 3)
    const mapStateToProps = (state) => ({
      counter: tripleCount(state)
    })

    Selectors can compute derived data, allowing Redux to store the minimal possible state.
    Selectors are efficient. A selector is not recomputed unless one of its arguments change.
    Selectors are composable. They can be used as input to other selectors.
    https://github.com/reactjs/reselect    */

export default connect(mapStateToProps)(Favourites)
