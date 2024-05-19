import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardStats from './CardStats'
import CardSocial from './CardSocial'
import { useAppStore } from '../../store'
import cn from 'classnames';


function Card() {
    const { theme , user } = useAppStore(store => store);
    const isDark = theme === 'dark';

    return (

        <div className='mt-4 pb-20 md:mt-6    '>
            <div className="container">
                <div className={cn('rounded-2xl  py-8 px-6 md:p-10 lg:p-12 theme-transition', {
                    'bg-dark-violet': isDark,
                    'bg-white shadow-light-mode ': !isDark
                })}>
                    <CardHeader isDark={isDark} user={user} />
                    <CardBody isDark={isDark} user={user} />
                    <CardStats isDark={isDark} user={user} />
                    <CardSocial isDark={isDark} user={user} />
                </div>

            </div>
        </div>
    )
}

export default Card
