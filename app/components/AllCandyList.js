import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchCandies} from '../reducers'
import EachCandy from './EachCandy'

class AllCandyList extends Component {
  
  async componentDidMount() {
    await this.props.fetchCandies()
  }
  
  render () {
    console.log('All candies in AllCandy', this.props.candies)
    return (
      <div>
        <h2>Candy List</h2>
          {
            this.props.candies.map(candy => <EachCandy key={candy.id} candy={candy} />)
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    candies: state.candies
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    fetchCandies: () => dispatch(fetchCandies())
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(AllCandyList)