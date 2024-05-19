import React, { lazy } from 'react'
import cn from 'classnames'

function CardSocial(props) {
    const { isDark, user } = props;


    const links = [
        {
            icon: <i className="fa-solid fa-location-dot"></i>,
            text: user.location || 'not available',
            href: '#',
            className: 'md:order-1 capitalize' ,
            target : user.location ? '_blank' : ''

        },
        {
            icon: <i className="fa-solid fa-link"></i>,
            text: user.blog || 'not available',
            href: '#',
            className: cn('md:order-3',{ 'capitalize' : !user.blog }) ,
            target : user.blog ? '_blank' : ''
        },
        {
            icon: <i className="fa-brands fa-twitter"></i>,
            text: user.twitter_username ? ('@'+user.twitter_username) : '' || 'not available',
            href: user.twitter_username ? ('https://twitter.com/'+user.twitter_username) : '',
            className: cn('md:order-2',{ 'capitalize' : !user.twitter_username }) , 
            target : user.twitter_username ? '_blank' : ''
        },
        {
            icon: <i className="fa-solid fa-building"></i>,
            text: '@github',
            href: user.html_url,
            className: 'md:order-4' , 
            target : '_blank'
        }
    ]
    return (
        <div className='mt-6 md:mt-[30px] lg:ml-[154px]'>
            <ul className='flex flex-col gap-y-4 md:flex-row md:flex-wrap md:gap-y-[18px] '>
                {
                    links.map((link, index) => (
                        <li key={index} className={`${link.className} md:w-1/2`}>
                            <a
                                href={link.href}
                                className={cn('flex theme-transition  ', {
                                    'text-white': isDark,
                                    'text-steelblue': !isDark
                                })}
                                target={link.target}
                            >
                                <span className='w-10 text-xl md:w-8 flex'>{link.icon}</span>
                                <span className='text-[13px] md:text-[15px] hover:underline cursor-pointer '>{link.text}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CardSocial
