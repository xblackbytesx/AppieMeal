import { connect } from 'react-redux'
import React from 'react'

import { selectNoMeal } from './../../../store/selectedMeals'

export const FooterActionsContainer = (props) => (
    <div>
      <footer className="footer">
        {/*{JSON.stringify(props)}*/}
        <a className="footer__link" href="#">Ga naar favorieten</a>
        <a className="footer__link" onClick={() => props.selectNoMeal(props.day)}>
          Ik wil geen maaltijd
        </a>
      </footer>
    </div>
  )

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    selectNoMeal,
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterActionsContainer)
