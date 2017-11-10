import React from 'react'
import { browserHistory } from 'react-router'

export const ListView = (props) => (
  <div>
    <button onClick={() => browserHistory.push('/meal/zaterdag')}>Back to shop</button>
    <button onClick={() => browserHistory.push('/thank-you')}>Accept</button>
  </div>
)

export default ListView
