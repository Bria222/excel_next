import Link from 'next/link'
import './register.css'
import Image from 'next/image'

const Register = () => {
  return (
    <>
      <br />
      <br />
      <div className='signup-form'>
        <form>
          <div className='text-center'>
            <Image
              src='/assets/user.webp'
              alt='Description of the image'
              width={80}
              height={80}
            />
          </div>

          <h2 className='text-center'>Sign Up</h2>

          <hr />

          <div className='form-group'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                name='fname'
                placeholder='First Name'
                required
                pattern='[A-Za-z ]+'
                title='Letters only'
                minLength={2}
                maxLength={30}
                autoComplete='off'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                name='lname'
                placeholder='Last Name'
                required
                pattern='[A-Za-z ]+'
                title='Letters only'
                minLength={2}
                maxLength={30}
                autoComplete='off'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email Address'
                required
                title='Valid Email id'
                minLength={5}
                maxLength={45}
                autoComplete='off'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-group'>
              <input
                type='tel'
                className='form-control'
                name='contact'
                placeholder='Mobile Number'
                required
                pattern='[0-9]{10}'
                title='10 numeric characters only'
              />
            </div>
          </div>

          <div className='form-group'>
            <div className='input-group'>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                required
                pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                title='At least one number, one uppercase and lowercase letter, and at least 6 or more characters'
              />
            </div>
          </div>

          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-primary btn-lg'
              name='signup'
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className='d-flex gap-2 fw-bolder text-success'>
          Already have an account?{' '}
          <Link href='/login' className='nav-link'>
            Login here
          </Link>
        </div>
      </div>
    </>
  )
}

export default Register
