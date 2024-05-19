import React from 'react'

function ErrorMessage(props) {
    const { error } = props;

    return (
        <div className='mt-4'>
            <p className='text-red-error text-[13px]  lg:text-[18px]'>{error}</p>
        </div>
    )
}

export default ErrorMessage
