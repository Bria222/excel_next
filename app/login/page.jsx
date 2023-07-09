import Link from 'next/link'

import './login.css'
import Image from 'next/image'

export const metadata = {
  title: 'exel revision resorces',
  description:
    'highschool notes, CBC, 8-4-4, high school notes, Quizzes revision guides and reference notes revisio materials  topical tests CPA KASNEB Revision kits and much more signup to get unlimited access',
  keywords:
    'highschool notes, notes,cbc,kcse,revision resources,cpa,CPA,KASNEB,kasneb',
}
const Login = () => {
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

            <h3>login</h3>
          </div>

          <div className='form-group mt-1'>
            <div className='form-group'>
              <div className='input-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                  required
                />
              </div>
            </div>

            <div className='form-group'>
              <div className='input-group'>
                <div className='input-group-prepend'></div>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  placeholder='Password'
                  required='required'
                />
              </div>
            </div>

            <div className='form-group'>
              <button
                type='submit'
                className='btn btn-primary btn-lg'
                name='login'
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className='d-flex gap-2 fw-bolder text-success'>
          Not registered yet?{' '}
          <Link href='/register' className='nav-link'>
            Signup here
          </Link>
          <Link href='/' className='nav-link'>
            home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Login
