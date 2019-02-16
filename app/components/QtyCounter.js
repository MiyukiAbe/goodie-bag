import React, {Component} from 'react';
import { connect } from 'react-redux'
import { updateCandyQty } from '../reducers'


// import EachCandy from './EachCandy'
// import QtyCounter from './QtyCounter'
// import { withRouter } from 'react-router-dom'

class QtyCounter extends Component {
  constructor (props){
    super(props)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrease = this.handleDecrease.bind(this)
    
  }

  handleIncrement() {
    if(this.props.candy.quantity > 10) {
      console.log('Bag is full')
    } else {
      const qty = this.props.candy.quantity + 1
      const newObj = {...this.props.candy, quantity: qty}
      this.props.addQty(newObj)
    }

  }
  
  handleDecrease() {
    console.log('just clicked')
    const qty = this.props.candy.quantity - 1
    const newObj = {...this.props.candy, quantity: qty}
    console.log('I am about to dispatch!')
    this.props.addQty(newObj)
  }
  
  render () {
    console.log('qtyCounter', this.props.candy.quantity)
    return (
      <div>
        <p>Total Qty: {this.props.candy.quantity}</p>
        <button onClick={this.handleIncrement}>Increase</button>
        <button onClick={this.handleDecrease}> Decrease</button>
      </div>
    )
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    addQty: (newQty) => dispatch(updateCandyQty(newQty))
  }
}

export default connect(null, mapStateToDispatch)(QtyCounter)


