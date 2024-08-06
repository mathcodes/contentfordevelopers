import React from 'react'

function Header() {
    return (
        <header>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <h1 className="text-white text-2xl">React Router</h1>
                <ul className="flex">
                    <li className="mr-4">
                        <a href="/" className="text-white">Home</a>
                    </li>
                    <li className="mr-4">
                        <a href="/about" className="text-white">About</a>
                    </li>
                    <li>
                        <a href="/services" className="text-white">Services</a>
                    </li>
                </ul>
            </nav>        
            </header>
    ) 
}

export default Header