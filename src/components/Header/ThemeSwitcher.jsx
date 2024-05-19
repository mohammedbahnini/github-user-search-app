import React from 'react'
import { useAppStore } from '../../store'
import cn from 'classnames';

function ThemeSwitcher(props) {
    const {  switchTheme , isDark } = props;
   
    
    return (
        <div className={cn('theme-transition' , {
            'text-white hover:text-steelblue-hover': isDark,
            'text-steelblue hover:text-very-dark-slategray ': !isDark
        })}>
            <span className='mr-6 uppercase text-[13px] tracking-[2.5px] font-bold  '>{isDark ? 'light' : 'dark'}</span>
            <span className='cursor-pointer' onClick={switchTheme}>
                {
                    isDark ?
                        <i className="fa-regular fa-sun"></i>
                        :
                        <i className="fa-solid fa-moon"></i>
                }
            </span>
        </div>
    )
}

export default ThemeSwitcher
