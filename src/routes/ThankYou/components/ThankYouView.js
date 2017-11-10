import React from 'react'
import { browserHistory } from 'react-router'

export const ThankYouView = (props) => (
  <div className="bedankt" onClick={() => browserHistory.push('/end')}>
    <img src='/graphic-klaar.svg' />
    <h1>Je appie meals worden vrijdag tussen 14 en 16 uur bezorgd</h1>
    <img src='/eet-smakelijk.svg' />
  </div>
)

export default ThankYouView
