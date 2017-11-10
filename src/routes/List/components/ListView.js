import React from 'react'
import { browserHistory } from 'react-router'
import List from './../containers/List'

export const ListView = (props) => (
  <div>
    <button onClick={() => browserHistory.push('/meal/zaterdag')}>Back to shop</button>
    <button className="bestellen-knop" onClick={() => browserHistory.push('/thank-you')}>Plaats bestelling</button>

    <List />
  </div>
)

export default ListView
