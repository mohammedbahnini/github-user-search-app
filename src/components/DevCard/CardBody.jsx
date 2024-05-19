import React from 'react'
import cn from 'classnames'

function CardBody(props) {
    const { isDark , user } = props;

    return (
        <div className='lg:hidden'>
            <p className={cn(' mt-8 text-[13px] leading-[25px] md:mt-6 md:text-[15px]' , {
                'text-white' : isDark , 
                'text-steelblue' : !isDark
            })}>{user.bio || 'No bio has been found !'}</p>
        </div>
    )
}

export default CardBody
