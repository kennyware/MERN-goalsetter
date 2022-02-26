import {useState, useEffect} from 'react'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formData;

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
        <h1>Register</h1>
        <p>Please create and account</p>
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
                <input type="text" id='password' name='password' value={password} className='form-control' onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="text" id='password2' name='password2' value={password2} className='form-control' onChange={onChange} />
            </div>   
            <div className="form-group">
                <button className="btn btn-dark btn-block" type='submit'>Submit</button>
            </div>
        </form>
    </section>
  </>
}

export default Register