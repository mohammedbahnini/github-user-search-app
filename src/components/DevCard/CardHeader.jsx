import React from 'react'
import cn from 'classnames'



function CardHeader(props) {
    const { isDark, user } = props;

    return (
        <div className='flex gap-x-5 items-center md:gap-x-10 lg:gap-x-9 lg:items-start'>

            <div className='rounded-full bg-slate-300 w-[70px] aspect-square overflow-hidden md:w-[117px] lg:mt-1  '>
                <img src={user.avatar_url} alt="" />
            </div>

            <div className='lg:flex lg:justify-between lg:items-start lg:flex-1 lg:flex-wrap'>
                <div>
                    <h1
                        className={cn('text-base font-bold capitalize  md:text-[26px] md:mb-[2px] lg:leading-10 theme-transition ', {
                            'text-white': isDark,
                            'text-very-dark-slategray': !isDark
                        })}
                    >{user.name || user.login}</h1>
                    <a href="#" className='text-royalblue text-[13px] md:text-base '>@{user.login}</a>
                </div>
                <div>
                    <p className={cn('mt-[6px] text-[13px] md:mt-1 md:text-[15px] theme-transition ', {
                        'text-white ': isDark,
                        'text-slategray': !isDark
                    })}>Joined {user.created_at} </p>
                </div>

                <div className={cn('hidden lg:block  mt-5 text-[15px] leading-[25px] theme-transition ', {
                    'text-white': isDark,
                    'text-steelblue': !isDark
                })}>
                    <p>{user.bio}</p>
                </div>
            </div>


        </div>
    )
}

export default CardHeader
