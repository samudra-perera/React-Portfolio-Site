import React, {useState, useEffect} from 'react'
// import {Link} from 'react-scroll'
import { Link } from 'react-router-dom'
import { Spring, animated } from 'react-spring'
import './nav.css'
import Logo from '../../img/logo.png'

const Nav = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

  return (
    <Spring
        from={{ opacity: 0}}
        to={{opacity: 1}}
        config={{duration: 1000}}
    >
        { props => (
            <animated.nav style={props} className={`${sticky ? 'sticky' : ''}`}>
                <NavComps />
            </animated.nav>
        )}

    </Spring>
  )
}

const NavComps = () => {

    const [isMobile, setIsMobile] = useState(false)

    return (
        <div className='navContainer'>
            <div className='nav-left'>
                <div className='nav-left wrapper'>
                    <div className='nav-left-home'>
                        <Link className='nav-left-img' to='/'>
                            <img className='logoTitile' src={Logo} alt='SamudraLogo'/>
                            <span className='nameTitle'>Samudra Perera</span>
                        </Link>
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
            <div 
                className={isMobile ? 'nav-links-mobile' : 'nav-right'}
                onClick={() => setIsMobile(false)}
            >
                <div className='nav-right wrapper'>
                        <Link className='about-me' to='/' spy={true} smooth= {true} offset={-50} duration={500} onClick={() => setIsMobile(false)}>About Me</Link>
                        <Link className='skills' to='/projects' onClick={() => setIsMobile(false)}>Projects</Link>
                        <Link className='projects' to='/work' onClick={() => setIsMobile(false)}>Work Experience</Link>
                        {/* <a className='resume' href='https://www.canva.com/design/DAFHfQnm6Y4/EjTJul_FeVZ_k5fHgotXGQ/view?utm_content=DAFHfQnm6Y4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank' rel="noreferrer">Resume</a> */}
                </div>
            </div>
            <button 
                className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </div>
    )
}


export default Nav