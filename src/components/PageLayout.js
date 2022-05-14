import React from 'react' 

export default function PageLayout({ title = "", children }) {
    return (
        <><div className='font-bold text-xl md:text-2xl py-2 dark:text-white'><h1>{title}</h1></div>
            <div className='bg-white dark:bg-gray-800 rounded-xl shadow p-8 mt-2'>
                {children}
            </div>
        </>

    )
}  