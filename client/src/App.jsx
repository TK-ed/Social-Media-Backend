import React from 'react'
import Login from './components/login/login'
import Nav from './components/navbar/nav'
import './index.css'

const App = () => {

  const app = '!!'

  return (
    <div className='index'>
      <div className="nav">
        <Nav />
        <br></br>
      <div className='content'> 
        {/* <Login /> */}
        <h1 className="class">The Metaverse Explorer</h1>
        <h2 className="class">{app} enables users to discover connections that was not possible before.</h2>
        <img src=''/>
      </div>
      </div>
    </div>
  )
}

export default App