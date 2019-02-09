import React from 'react'
import AllCandyList from './AllCandyList'
import { HashRouter, Route, Link } from 'react-router-dom'

const Root = () => {
  return (
    <HashRouter>
    <div>
      <Link to='/'>
      <nav>
          Goodie Bag
      </nav>
      </Link>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path='/' component={AllCandyList} />
        <Route path='/candies' component={AllCandyList} />
      </main>
    </div>
    </HashRouter>
  )
}

export default Root
