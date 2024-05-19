import React from 'react'
import { useAppStore } from '../../store'
import { Triangle } from 'react-loader-spinner';

function Loader() {
    const { loading } = useAppStore(state => state);

    return (
        <>
            {loading && (
                <div
                    className='fixed top-0 bottom-0 bg-black/90 z-20 w-screen flex items-center justify-center overscroll-contain overflow-y-hidden  no-scroll'>
                    <Triangle
                        visible={true}
                        height="60"
                        width="60"
                        color="white"
                        ariaLabel="triangle-loading"

                    />
                </div>
            )}
        </>
    )
}

export default Loader
