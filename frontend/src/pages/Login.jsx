import {useState, useEffect} from 'react'

function Login() {
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
                <input type="text" id='password' name='password' value={password} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-dark btn-block" type='submit'>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Login