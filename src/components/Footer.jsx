import React from 'react'
import { Nav } from 'react-bootstrap'
import { Logo, NAVBAR_LINKS } from './Navbar'
import { Divider } from '@mui/material'
import "./styles/Footer.scss"

const TelegramIcon = 'https://img.icons8.com/ios-filled/949494/20/telegram-app.png'
const TwitterIcon = 'https://img.icons8.com/ios-filled/949494/20/null/twitter.png'
const RedditIcon = 'https://img.icons8.com/ios-glyphs/949494/20/reddit.png'
const YoutubeIcon = 'https://img.icons8.com/ios-filled/949494/20/youtube-play--v1.png'

const SUPPORT_LINKS = [
    {
        href: '/',
        link: 'Telegram'
    },
    {
        href: '#',
        link: 'Email'
    },
]

const FooterTop = () => {
    return(
        <div className='FooterTop'>
        <div className='Top'>
            <Logo />
            <p>Mushee helps you receive payments from<br /> anyone in the world.</p>
        </div>
        <div className='ShortLinks'>
            <div className='Primary'>
                <h3>Primary</h3>
                <Nav className='NavLinks'>
                    {
                        NAVBAR_LINKS.slice(0,).map(navbar_links => {
                            return(
                                <Nav activeKey='/' color='black' key={navbar_links.href} >
                                    <Nav.Item>
                                        <Nav.Link href={navbar_links.href} eventKey={navbar_links.href}>{navbar_links.link}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            )
                        })
                    }
                </Nav>
            </div>
            <div className='Support'>
                <h3> Support</h3>
                <Nav className='NavLinks'>
                    {
                            SUPPORT_LINKS.slice(0,).map(support_links => {
                                return(
                                    <Nav activeKey='/' color='black' key={support_links.href} >
                                        <Nav.Item>
                                            <Nav.Link href={support_links.href} eventKey={support_links.href}>{support_links.link}</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                )
                            })
                        }
                </Nav>
            </div>
        </div>
    </div>
    )
}

const SOCIALS = [
    {
        name: 'telegram',
        src: `${TelegramIcon}`,
        hrf: ''
    },
    {
        name: 'github',
        src: `${RedditIcon}`,
        hrf: ''
    },
    {
        name: 'twitter',
        src: `${TwitterIcon}`,
        hrf: ''
    },
    {
        name: 'youtube',
        src: `${YoutubeIcon}`,
        hrf: ''
    }
]

export function Socials(){
    return (
        <div id='NavSocials' >
        {
        SOCIALS.map((social) => {
            return (
                <div className={social.name} key={social.name} style={{ padding: '0 20px'}}>
                    <a href={social.hrf} target='_blank' rel='noreferrer'>
                    <img srcSet='' alt={social.name} src={social.src}/>  
                    </a>                                
                </div>
            )
        })
        }
        </div>
    )
}

const FooterBottom = () => {
    return(
        <div className='FooterBottom'>
            <Socials />
            <div className='BottomText'>
                <h5>Terms of use </h5>
                <p>Ⓒ 2023 Mushee. All Rights Reserved </p>
            </div>
        </div>
    )
}

const Footer = () => {
  return (
    <div className='Footer'>
        <FooterTop />
        <Divider color='white' />
        <FooterBottom />
    </div>
  )
}

export default Footer