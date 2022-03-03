import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import  {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isError, isSuccess, isLoading, message} = useSelector((state) => state.auth)

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }

            dispatch(register(userData))
        }
    }

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    },[isError, isSuccess, user, message, navigate, dispatch])

    if(isLoading) {
        return <Spinner />
    }

  return <>
    <section className='heading'>
        <h1>Register</h1>
        <p>Please create an account</p>
    </section>
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={name} className='form-control' onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>         
                <input type="text" id='email' name='email' value={email} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' name='password' value={password} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" id='password2' name='password2' value={password2} className='form-control' onChange={onChange} />
            </div>   
            <div className="form-group">
                <button className="btn btn-dark btn-block" type='submit'>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Register