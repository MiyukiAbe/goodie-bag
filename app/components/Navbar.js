
import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <nav>
        <Link to='/'>Homepage</Link>
        <Link to='/candies'>Candies List</Link>
      </nav>
  )
}
    
    
