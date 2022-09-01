import React from 'react'
import './nav.css'
//import myLogo from '../'

const Nav = () => {
  return (
    <div className='navContainer'>
        <div className='nav-left'>
            <div className='nav-left wrapper'>
                <a className='nav-left img' href='/'>
                    <img src='' alt='SamudraLogo'/>
                    <span className='nameTitle'>Samudra Perera</span>
                </a>
                <div className='nav-left-social-links'>
                    <a className='linkedIn' href='https://www.linkedin.com/in/samudraperera/' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a className='Github' href='https://github.com/samudra-perera'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a className='Twitter' href='https://twitter.com/TheRealSamudra'>
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a className='Goodreads' href='https://www.goodreads.com/user/show/151382546-samudra-perera'>
                        <i class="fa-brands fa-goodreads"></i>
                    </a>
                </div>

            </div>
        </div>
        <div className='nav-right'>
            <div className='nav-right wrapper'>
                <a className='about-me' href='#about-me'>About Me</a>
                <a className='projects' href='#projects'>Propjects</a>
                <a className='resume' href='#resume'>Resume</a>

            </div>
        </div>
    </div>
  )
}

export default Nav