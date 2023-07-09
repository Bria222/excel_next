import React from 'react'

const Footer = () => {
  return (
    <>
      {' '}
      <div id='layoutAuthentication_footer'>
        <footer className='py-4 bg-light mt-auto'>
          <div className='container-fluid px-4'>
            <div className='d-flex align-items-center justify-content-between small'>
              <div className='text-muted'>Copyright &copy; 2023</div>
              <div>
                <a
                  href='https://brian-nyachae.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Brian | Fullstack software Engineer
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
