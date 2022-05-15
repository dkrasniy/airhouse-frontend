import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../atoms/Logo'
import { useLocation } from 'react-router-dom'
import { MenuAlt4Icon, XIcon } from '@heroicons/react/solid'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen]= useState(false)
    const location = useLocation();

    const navigation = [
        { label: 'View Words ', slug: '/', active: location.pathname === '/' },
        { label: 'Add Word ', slug: '/add', active: location.pathname === '/add' },
        { label: 'Filter Words', slug: '/filter', active: location.pathname === '/filter' }
    ]

    const NavigationLinks = () => (
        navigation.map(({ label = "No label", slug = "#", active = false }, n) =>
            <Link key={slug} to={slug} className={`flex transition py-4 md:py-3 px-6 font-semibold text-base border-l-2 ${active ? 'text-airhouse-600 font-semibold border-airhouse-500' : 'text-gray-500 hover:text-gray-800 hover:border-gray-200 '}`}>{label}</Link>)
    )

    return (
        <header className='md:w-56 flex md:flex-col items-center md:items-start justify-between md:justify-start py-6 md:py-0'>
            <div className='flex items-center'>
                <span className='font-bold py-2 text-2xl flex items-center dark:text-white select-none'>
                    <Logo className="text-airhouse-500 dark:text-airhouse-400 w-8 h-8 mr-2" /> Air<span className='text-airhouse-500 dark:text-airhouse-400 '>Matcher</span>
                </span>
            </div>
            <div className='hidden md:block mt-8'>
                <NavigationLinks />
            </div>
            <div className={`flex items-center md:hidden`}>
                <button onClick={()=>setMobileMenuOpen(!mobileMenuOpen)} className={`z-50 relative w-10 h-10 hover:bg-airhouse-100 rounded-xl p-1 hover:text-airhouse-600 ${mobileMenuOpen ? 'bg-airhouse-100 text-airhouse-600' : ''}`}>
                    <MenuAlt4Icon className={`w-10 h-10 p-2 transition absolute top-0 left-0 right-0 ml-auto mr-auto ${mobileMenuOpen ? 'scale-0 opacity-0' : 'scale-1 opacity-100'}`}/>
                    <XIcon className={`w-10 h-10 p-2 transition absolute top-0 left-0 right-0 ml-auto mr-auto ${mobileMenuOpen ? 'scale-1 opacity-100' : 'scale-0 opacity-0'}`}/>
                </button>
            </div> 
            <div className={`w-80 fixed  h-screen top-0 right-0  bg-gradient-to-b from-white to-airhouse-50 z-10 flex shadow-lg pt-10 flex flex-col transform transition ease-in-out duration-500  ${mobileMenuOpen ? 'translate-x-0 opacity-100' : ' translate-x-full opacity-0'}`}>
                <span className='block px-6 font-bold mb-6 text-lg'>Navigation</span>
                <NavigationLinks/>
            </div>
        </header>
    )
}