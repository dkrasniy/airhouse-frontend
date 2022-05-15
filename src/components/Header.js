import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../atoms/Logo'
import { useLocation } from 'react-router-dom' 

export default function Header() { 
    const location = useLocation();

    const navigation = [
        { label: 'View Words ', slug: '/', active: location.pathname === '/' },
        { label: 'Add Word ', slug: '/add', active: location.pathname === '/add' },
        { label: 'Filter Words', slug: '/filter', active: location.pathname === '/filter' }
    ]

    return (
        <header className='w-56 flex flex-col'> 
            <div className='flex items-center'>
                <span className='font-bold py-2 text-2xl flex items-center dark:text-white'>
                    <Logo className="text-airhouse-500 dark:text-airhouse-400 w-8 h-8 mr-2" /> Air<span className='text-airhouse-500 dark:text-airhouse-400 '>Matcher</span>
                </span>
            </div>
            <div className='mt-8'>
                {navigation.map(({ label = "No label", slug = "#", active = false }, n) =>
                    <Link key={slug} to={slug} className={`flex transition py-3 px-6 font-semibold text-sm md:text-base border-l-2 ${active ? 'text-airhouse-600 font-semibold border-airhouse-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-200 '}`}>{label}</Link>)}
            </div> 

        </header>
    )
}