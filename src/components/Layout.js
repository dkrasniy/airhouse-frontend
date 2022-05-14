import React, { Children } from 'react'
import Header from './Header'

export default function Layout(props) {
    return (
        <div className='min-h-screen bg-gradient-to-b from-airhouse-50 dark:bg-gray-900 dark:from-gray-800'>
            <div className='md:flex mx-auto max-w-5xl pt-12 px-6 md:px-2'>
                <Header />
                <main id="main" className='flex-1' >
                    {props.children}
                </main>
            </div>
        </div>
    )
}

{/* <div className='flex mx-auto max-w-5xl pt-12'></div> */ }