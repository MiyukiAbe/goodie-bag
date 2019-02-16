import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchACandy } from '../reducers'
import EachCandy from './EachCandy'
import QtyCounter from './QtyCounter'
import { withRouter } from 'react-router-dom'

class SingleCandy extends Component {
  
  componentDidMount() {
    const candyId = this.props.match.params.candyId;
    this.props.fetchYourCandy(candyId)
  }
 
  render () {
    return (
      <div>
        <h2>Is this your Favorite??</h2>
        <EachCandy candy={this.props.aCandy}/>
        <QtyCounter candy={this.props.aCandy} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    aCandy: state.aCandy
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchYourCandy: (aCandy) => dispatch(fetchACandy(aCandy))
  }
}

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(SingleCandy))