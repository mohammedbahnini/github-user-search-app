import React, { useRef } from 'react'
import cn from 'classnames';


function Input(props) {
    const { isDark , handleOnChange   } = props;
    const ref = useRef(null);

    return (
        <input
            type='text'
            placeholder='Search GitHub username…'
            className={cn('border-none outline-none flex-1 bg-transparent text-[13px]  lg:text-[18px] theme-transition', {
                'placeholder:text-white text-white': isDark , 
                'placeholder:text-steelblue text-steelblue' : !isDark
            })}
            ref={ref}
            onChange={()=>handleOnChange(ref.current.value)}
        />
    )
}

export default Input
