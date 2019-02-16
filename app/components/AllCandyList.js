import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchCandies} from '../reducers'
import EachCandy from './EachCandy'
import { withRouter } from 'react-router-dom'
import Candy from './Candy';

class AllCandyList extends Component {
  
  componentDidMount() {
    this.props.fetchCandies()
  }
  
  render () {
    // return (
    //   <div>
    //     <h2>Candy List</h2>
    //       {
    //         this.props.candies.map(candy => <EachCandy key={candy.id} candy={candy}/>)
    //       }
    //   </div>
    // )
    
    return (
      <div>
        <h2 className="section-title">Candies</h2>
        <ul className="container">
          {this.props.candies.map(candy => (
            <div className="card" key={candy.id}>
              <Candy candy={candy} />
            </div>
          ))}
        </ul>
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

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(AllCandyList))