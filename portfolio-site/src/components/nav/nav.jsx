import React from 'react'
import './nav.css'
import Logo from '../../img/logo.png'

const Nav = () => {
  return (
    <div className='navContainer'>
        <div className='nav-left'>
            <div className='nav-left wrapper'>
                <div className='nav-left-home'>
                    <a className='nav-left-img' href='/'>
                        <img className='logoTitile' src={Logo} alt='SamudraLogo'/>
                        <span className='nameTitle'>Samudra Perera</span>
                    </a>
                </div>
                <div className='nav-left-social-links'>
                    <a className='linkedIn' href='https://www.linkedin.com/in/samudraperera/' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-linkedin"></i>
                    </a>
                    <a className='Github' href='https://github.com/samudra-perera' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a className='Twitter' href='https://twitter.com/TheRealSamudra' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a className='Goodreads' href='https://www.goodreads.com/user/show/151382546-samudra-perera' target='_blank' rel='noreferrer'>
                        <i class="fa-brands fa-goodreads"></i>
                    </a>
                </div>
            </div>
        </div>
        <div className='nav-right'>
            <div className='nav-right wrapper'>
                <div className='nav-right-anchor-container'>
                    <a className='about-me' href='#about-me'>About Me</a>
                    <a className='projects' href='#projects'>Projects</a>
                    <a className='resume' href='https://www.canva.com/design/DAFHfQnm6Y4/EjTJul_FeVZ_k5fHgotXGQ/view?utm_content=DAFHfQnm6Y4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank' rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav