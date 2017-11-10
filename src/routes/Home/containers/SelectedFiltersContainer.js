import { connect } from 'react-redux'

import { changeFilter } from './../../../store/selectedFilters'

import SelectedFilters from '../../../components/selectedFilters/selectedFilters'

const mapStateToProps = (state, ownProps) => ({
  filters : state.selectedFilters[ownProps.day]
})

const mapDispatchToProps = {
  changeFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFilters)
