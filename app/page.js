/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import './styles/landing.css'

const HomePage = () => {
  return (
    <>
      <section
        id='home'
        className='bg-cover hero-section'
        style={{ backgroundImage: 'url(../../../assets/img/reviseHero.jpg)' }}
      >
        <div className='overlay'></div>
        <div className='container text-white text-center'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='display-4 ml6' data-aos='zoom-in'>
                <span className='text-wrapper'>
                  <span className='letters'>
                    We Provide Remarkable Revision Content
                  </span>
                </span>
              </h1>
              <h4 className='my-4 fw-bold' data-aos='fade-up'>
                for CBC, 8-4-4, high school notes, Quizzes revision guides and
                reference notes revision materials <br /> topical tests CPA
                KASNEB Revision kits and much more signup to get unlimited
                access
              </h4>
              <a href='#' data-aos='fade-up' className='btn btn-main'>
                Get started
              </a>
              <button
                type='button'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
                data-aos='fade-up'
                className='btn btn-main'
              >
                How Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='card' style={{ width: '100%' }}>
                <div className='card-header bg-success fw-bolder display-6 text-center text-white'>
                  step by step guide
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item fw-bold'>
                    click on get started button or click signup on the top
                    navigation
                  </li>
                  <li className='list-group-item fw-bold'>
                    create an account with a valid email and phone number
                  </li>
                  <li className='list-group-item fw-bold'>
                    after successful registration you will be redirected to the
                    login page. key in login credentials to access the system
                    features
                  </li>
                  <li className='list-group-item fw-bold'>
                    click on subscribe button if you are not subscribed you will
                    be prompted to enter your phone number on the popup dialog
                    and press pay to activate your account.
                  </li>
                </ul>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-danger'
                data-bs-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <section
        id='about'
        className='bg-cover'
        style={{ backgroundImage: 'url(assets/img/cover_3.jpg)' }}
      >
        <div className='overlay'></div>
        <div className='container text-white text-center'>
          <div className='row'>
            <div
              className='col-12 section-intro text-center'
              data-aos='fade-up'
            >
              <h1>__What scholars Say</h1>
              <div className='divider'></div>
              <p>
                Let us pick up our books and our pens. They are our most
                powerful weapons. <br />― Malala Yousafzai One child, one
                teacher, one book and one pen can change the world.”
              </p>
              <p>
                “Whatever the cost of our libraries, the price is cheap compared
                to that of an ignorant nation.”
                <br />
                -Walter Cronkite
              </p>
              <p>
                “Education is the most powerful weapon which you can use to
                change the world.” <br />
                -Nelson Mandela
              </p>
              <a href='#' className='video-btn'>
                <i className='bx bx-play'></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='features' className='text-center'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-12 section-intro text-center'
              data-aos='fade-up'
            >
              <div className='divider'></div>
              <h1 className='text-center fw-bolder text-success display-4'>
                FEATURES
              </h1>
            </div>
          </div>
          <div className='row gx-4 gy-5'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
              <div className='col'>
                <div className='card h-100'>
                  <i className='fa-solid fa-book-open fa-5x text-secondary'></i>
                  <div className='card-body'>
                    <h5 className='cardtitle'>CBC revision content</h5>
                    <p className='card-text'>
                      Our system has the latest CBC curriculum notes teacher
                      guides in every grade, revision materials and much more.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <i className='fa-solid fa-magnifying-glass fa-5x text-info'></i>
                  <div className='card-body'>
                    <h5 className='card-title'>revision resources</h5>
                    <p className='card-text'>
                      All 8-4-4 system notes topical quizzes, reference
                      materials and much more. Click get started to enroll.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='card h-100'>
                  <i className='fa-brands fa-hive fa-5x text-warning'></i>
                  <div className='card-body'>
                    <h5 className='card-title'>All module notes</h5>
                    <p className='card-text'>
                      Our system is equipped with learning materials from CBC
                      lower to university and college materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='reviews' className='text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 section-intro text-center'>
              <h1>Our Testimonials</h1>
              <div className='divider'></div>
            </div>
          </div>
          <div className='row g-4 text-start'>
            <div className='col-md-4' data-aos='fade-up'>
              <div className='review p-4'>
                <div className='person'>
                  <img src='assets/img/mso.jpeg' alt='' />
                  <div className='text ms-3'>
                    <h6 className='mb-0 fw-bold'>Mary Muthoni.</h6>
                    <small>Project manager Excel School</small>
                  </div>
                </div>
                <p className='pt-4'>
                  "University of Nairobi, School of Technology/lnternational
                  Marketing., 'To nurture and satisfy the 21st-century child, we
                  need providence and educational cult. Excel revision resources
                  are the way to go. Let's walk the brains together.'
                </p>
                <div className='stars'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>

            <div className='col-md-4' data-aos='fade-up'>
              <div className='review p-4'>
                <div className='person'>
                  <img src='assets/img/bree.png' alt='' />
                  <div className='text ms-3'>
                    <h6 className='mb-0 fw-bold'>Brian Nyachae</h6>
                    <small>Software engineer Safaricom PLC</small>
                  </div>
                </div>
                <p className='pt-4'>
                  "Change is the end result of all true learning. But to arrive
                  there, you need hard work, determination, and the right
                  materials for you to excel, and for me, Excel revision
                  resources are among the best online platforms you need."
                </p>
                <div className='stars'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>

            <div className='col-md-4' data-aos='fade-up'>
              <div className='review p-4'>
                <div className='person'>
                  <img src='assets/img/wilson-nyakundi.jpg' alt='' />
                  <div className='text ms-3'>
                    <h6 className='mb-0'>Wilson Nyakundi</h6>
                    <small>Manager</small>
                  </div>
                </div>
                <p className='pt-4'>
                  “Knowledge is power. Information is liberating. Education is
                  the premise of progress, in every society, and in every
                  family. Excel revision materials have the best content for
                  reference.”
                </p>
                <div className='stars'>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='blog' className='bg-light'>
        <div className='container'>
          <div className='row'>
            <div
              className='col-12 section-intro text-center'
              data-aos='fade-up'
            >
              <h1 className='text-dark'>Our Blog Posts</h1>
              <div className='divider'></div>
              <h4 className='text-dark'>
                check our latest blog posts below for more detailed information
                click on view more to read the entire Blog.
              </h4>
            </div>
          </div>
          <div className='row text-start'>
            <div className='col-md-4' data-aos='fade-up'>
              <img
                src='assets/img/mindset.png'
                alt=''
                style={{ height: '250px' }}
              />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>Growth mindset</a>, 12 Jan 2022
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='#'>Growth mindset</a>
                </h5>
                <p className='text-dark'>
                  What does growth mindset teaching look like in the real world?
                  When we take the research out of the laboratory and into the
                  classroom, we see amazing results.
                </p>
              </div>
            </div>
            <div className='col-md-4' data-aos='fade-up'>
              <img
                src='assets/img/child-online.jpg'
                alt=''
                style={{ height: '250px' }}
              />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>How can E-learning benefit you</a>, 15
                  Dec 2020
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='https://elearningindustry.com/9-benefits-of-elearning-for-students'>
                    Using online resources
                  </a>
                </h5>
                <p className='text-dark'>
                  Unlike classroom teaching, with online learning, you can
                  access the content an unlimited number of times. This is
                  especially required at the time of revision when preparing for
                  an exam.
                </p>
              </div>
            </div>
            <div className='col-md-4' data-aos='fade-up'>
              <img src='assets/img/blog_post3.png' alt='' />
              <div className='mt-4'>
                <small>
                  Posted in <a href='#'>E-learning</a>, 12 May 2022
                </small>
                <h5 className='mt-1 mb-2'>
                  <a href='#'>How to get the most out of E-learning</a>
                </h5>
                <p className='text-dark'>
                  E-learning is the most convenient mode of learning if you need
                  detailed notes and research findings?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id='contact'
        className='bg-cover text-white'
        style={{ backgroundImage: 'url(assets/img/cover_3.jpg)' }}
      >
        <div className='overlay'></div>
        <div className='container'>
          <div className='row'>
            <div
              className='col-12 section-intro text-center'
              data-aos='fade-up'
            >
              <h1>Get in touch</h1>
              <div className='divider'></div>
              <p>
                We are always one click away for more information, and please
                fill in the contact form below or call:{' '}
                <span className='text-white fw-bold bg-dark'>
                  0716047682/0710889090
                </span>
                <br />
                Please remember to enter your valid email address in the email
                field for easy tracking of your feedback.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-8 mx-auto' data-aos='fade-up'>
              <form className='row g-4'>
                <input
                  type='hidden'
                  name='_next'
                  value='https://excelrevisionresources.co.ke/'
                />
                <input
                  type='hidden'
                  name='_autoresponse'
                  value='thanks for reaching to us Excel team we will respond shortly thanks'
                />
                <input type='hidden' name='_captcha' value='false' />
                <div className='form-group col-md-6'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Full name'
                    required
                  />
                </div>
                <div className='form-group col-md-6'>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Email address'
                    required
                  />
                </div>
                <div className='form-group col-md-12'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Subject'
                    required
                  />
                </div>
                <div className='form-group col-md-12'>
                  <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='4'
                    className='form-control'
                    placeholder='Message'
                    required
                  ></textarea>
                </div>
                <div className='text-center'>
                  <button className='btn btn-main' type='submit'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title fs-5 text-center'
                id='exampleModalLabel'
              >
                create your account
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <h1>kindle contact support</h1>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-dark btn-sm'>
                techconsultants.bree@gmail.com
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
