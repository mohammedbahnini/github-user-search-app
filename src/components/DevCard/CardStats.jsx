import React from 'react'
import cn from 'classnames'

function CardStats(props) {
    const { isDark, user } = props;

    const stats = [
        {
            type: 'repos',
            stats: user.public_repos
        },
        {
            type: 'followers',
            stats: user.followers
        },
        {
            type: 'following',
            stats: user.following
        }
    ]
    return (
        <div className={cn(' px-4 py-5  rounded-[10px] mt-6 md:mt-8 md:px-8 md:py-4 lg:ml-[154px] theme-transition ', {
            'bg-very-dark-slategray': isDark,
            'bg-ghostwhite': !isDark
        })}>
            <div className='capitalize flex *:flex-1 *:text-center  md:*:text-left'>

                {
                    stats.map((stat, index) => (
                        <div key={index}>
                            <p className={cn('text-[11px] mb-2 md:mb-0 md:text-[13px] theme-transition ', {
                                'text-white': isDark,
                                'text-steelblue': !isDark
                            })}>{stat.type}</p>
                            <span
                                className={cn('text-base font-bold md:text-[22px] md:leading-[33px] block theme-transition', {
                                    'text-white': isDark,
                                    'text-very-dark-slategray': !isDark
                                })}
                            >{stat.stats}</span>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default CardStats
