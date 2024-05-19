import React from 'react'
import { useAppStore } from '../../store';
import ThemeSwitcher from './ThemeSwitcher';
import cn from 'classnames';

function Header() {
    const { theme , switchTheme } = useAppStore( store => store);
    const isDark = theme === 'dark';

    return (
        <header>
            <div className="container">
                <div className="flex items-center justify-between pt-8 md:pt-[140px] lg:pt-[144px]">
                    <a href="#" className={cn('text-[26px] font-bold theme-transition' ,{
                        'text-white' : isDark , 
                        'text-very-dark-slategray' : !isDark
                    })} >devfinder</a>

                <ThemeSwitcher theme={theme} switchTheme={switchTheme} isDark={isDark}  />
                </div>
            </div>
        </header>
    )
}

export default Header
