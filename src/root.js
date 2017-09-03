import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/todo'>ToDo</Link></li>
        <li><Link to='/child/0'>Child</Link></li>
        <li><Link to='/child/0/grand-child'>Grand Child</Link></li>
      </ul>
    </nav>
  </header>
)

export const Root = ({ route }) => (
    <div>
      <h1>Hello React MobX</h1>
      <Header/>
      
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  )
  export const Home = ({ route }) => (
    <div>
      <h2>Home</h2>
    </div>
  )
  export const CatchAll = ({ route }) => (
    <div>
      <h2>CatchAll</h2>
    </div>
  )
  export const Child = ({ route }) => (
    <div>
      <h2>Child</h2>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes, { someProp: 'these extra props are optional' })}
    </div>
  )
  
  export const GrandChild = ({ someProp }) => (
    <div>
      <h3>Grand Child</h3>
      <div>{someProp}</div>
    </div>
  )
 