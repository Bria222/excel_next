import Link from 'next/link'
export const metadata = {
  title: 'exel revision resorces',
  description:
    'exelrevisionresources, highschool notes, CBC, 8-4-4, high school notes, Quizzes revision guides and reference notes revisio materials  topical tests CPA KASNEB Revision kits and much more signup to get unlimited access',
  keywords:
    'highschool notes, notes,cbc,kcse,revision resources,cpa,CPA,KASNEB,kasneb',
}
const Navbar = () => {
  return (
    <>
      <nav
        className='navbar fixed-top navbar-expand-lg navbar-light bg-white'
        data-aos='fade-down'
      >
        <div className='container'>
          <Link href='/' passHref className='nav-link fw-bolder text-info'>
            EXCEL.
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link href='/' passHref className='nav-link'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='#about'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#features'>
                  Features
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#reviews'>
                  Reviews
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#blog'>
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <Link href='/' passHref className='nav-link'>
                  E-classNameroom
                </Link>
              </li>
              <li className='nav-item'>
                <div className='spinner-grow text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              </li>

              <li className='nav-item'>
                <Link href='/register' passHref className='nav-link'>
                  Sign up
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/login' passHref className='nav-link'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link href='/welcome' className='nav-link' passHref>
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
