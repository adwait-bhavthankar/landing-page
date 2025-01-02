import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 bg-opacity-0 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    MyLogo
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#home" className="text-white text-lg hover:text-blue-200">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white text-lg hover:text-blue-200">About</a>
                    </li>
                    <li>
                        <a href="#services" className="text-white text-lg hover:text-blue-200">Services</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-white text-lg hover:text-blue-200">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
