import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/useAuth'

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logOut} = useAuth()
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-20'>
          <Link to='/'>
            <img src={logo} alt='FinBullBear logo' />
          </Link>
          <div className='hidden font-bold lg:flex'>
            <Link to='/search' className='text-black hover:bg-lightGreen'>
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (<div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
            <a
              onClick={logOut}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>) : (<div className='hidden lg:flex items-center space-x-6 text-back'>
          <Link to='/login' className='text-black hover:bg-lightGreen'>Login</Link>
          <Link to='/register' className='px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70'>Sign up</Link>
        </div>)}
      </div>
    </nav>
  )
}

export default Navbar
