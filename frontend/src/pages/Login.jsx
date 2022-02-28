import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)
    
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const {email, password} = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(login(userData))
    }

    useEffect(() => {
        if(isError) {
            return toast.error(message)
        }

        if(isSuccess) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, dispatch, navigate])

    if(isLoading) {
        return <Spinner />
    }

  return <>
    <section className='heading'>
        <h1>Login</h1>
        <p>Login and start setting goals</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>         
                <input type="text" id='email' name='email' value={email} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' value={password} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-dark btn-block" type='submit'>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Login