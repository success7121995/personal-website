"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import MenuSVG from './svg/menu-svg'

const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Work Experience', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Showcases', href: '#showcases' },
    { name: 'Blog', href: '#blog' },
];

const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    // Handle outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen])

    return (
        <header 
            ref={menuRef}
            className="fixed top-0 left-0 w-full z-[100] py-4 bg-gradient-to-b from-white via-white/80 to-transparent lg:bg-black lg:from-black lg:via-black lg:to-transparent font-primary font-semibold text-white text-md">
            <div className="max-w-7xl mx-auto px-6 h-16 flex md:justify-center items-center justify-end">

                {/* Desktop Nav */}
                <nav className="hidden md:flex text-center items-center justify-center space-x-10">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            className={`transition-colors hover:opacity-70`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <button 
                    className="lg:hidden p-2 rounded-lg transition-colors mr-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuSVG className={`text-white h-8 w-8`} />
                </button>
            </div>
            
            {/* Mobile Nav Drawer */}
            <div 
                className={`absolute top-0 left-0 w-full bg-black transition-all duration-500 ease-in-out z-[110] lg:hidden overflow-hidden shadow-2xl rounded-b-2xl
                    ${isOpen 
                        ? "max-h-[500px] opacity-100 visible py-4"
                        : "max-h-0 opacity-0 invisible py-0"
                    }
                `}
            >
                <nav className="flex flex-col p-6 space-y-4">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href}
                            className="hover:pl-2 transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default TopNav;