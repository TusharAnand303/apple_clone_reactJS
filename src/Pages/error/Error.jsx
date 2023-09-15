import React from 'react'
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="error">
        <h1>404</h1>
        <h2>The page you’re looking for can’t be found.</h2>
        <Link to='/'>
        <button>Back to home page</button>
        </Link>
    </div>
    </>
  )
}

export default Error
