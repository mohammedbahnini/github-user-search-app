import React from 'react'
import { useAppStore } from '../store';
import cn  from 'classnames';

function Main(props) {
    const { theme , loading } = useAppStore( store => store);
    const isDarkMode = theme === 'dark';


    return (
        <main className={cn('min-h-svh theme-transition relative' , {
            'bg-very-dark-slategray' : isDarkMode , 
            'bg-ghostwhite' : !isDarkMode  , 
            'overscroll-contain overflow-y-hidden' : true , 
            
        })}>
            {props.children}
        </main>
    )
}

export default Main
