import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'

function Header() {
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Goal Setter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'><FaSignInAlt className='icon' /> Login</Link>
            </li>
            <li>
                <Link to='/register'><FaUser className='icon' /> Register</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header