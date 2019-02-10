import React from 'react'
import AllCandyList from './AllCandyList'
import SingleCandy from './SingleCandy'
import { HashRouter, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'

const Root = () => {
  return (
    <HashRouter>
    <div>
      <Navbar />
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path='/' />
        <Route path='/candies' component={AllCandyList} />
        <Route path = '/candies/:id' component={SingleCandy} />
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
