import {Link} from 'react-router-dom'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
  return (
    <header className='header'>
        <div className="logo">
            <Link to='/'>Goal Setter</Link>
        </div>
        <ul>
            {user ? (
                <li>
                    <button className='btn btn-dark' onClick={onLogout}><FaSignOutAlt className='icon' /> Logout</button>
                </li>
            ) : (
                <>
                    <li>
                        <Link to='/login'><FaSignInAlt className='icon' /> Login</Link>
                    </li>
                    <li>
                        <Link to='/register'><FaUser className='icon' /> Register</Link>
                    </li>
                </>
            )}
        </ul>
    </header>
  )
}

export default Header