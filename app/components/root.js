import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AllCandyList from './AllCandyList'
import SingleCandy from './SingleCandy'
import Navbar from './Navbar'
import Home from './Home'
import NotFound from './NotFound'

const Root = () => {
  return (
    <BrowserRouter>
    <div>
      
      {/* <Navbar /> */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit"><Link className="navlink" to="/">Home</Link></Button>
          <Button color="inherit"><Link className="navlink" to="/candies">Candies</Link></Button>
        </Toolbar>
      </AppBar>
      
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/candies' component={AllCandyList} />
          <Route exact path = '/candies/:candyId(\d+)' component={SingleCandy} />
          {/* `(\d+)` in the above route is a regular expression to restrict the `id` param to only be numbers */}
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default Root
