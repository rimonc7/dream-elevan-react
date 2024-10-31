import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { BsCoin } from "react-icons/bs";

const Header = ({ coin }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`flex justify-between my-6 mx-4 lg:mx-36 sticky top-0 z-50 transition-all duration-300 ${
                isScrolled ? 'backdrop-blur-md bg-white bg-opacity-90' : 'backdrop-blur-3xl bg-transparent'
            }`}
        >
            <img src={logo} alt="Logo" />
            <div className='flex items-center'>
                <ul className=' hidden lg:flex gap-4 '>
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <div className='ml-4'>
                    <button className='flex items-center gap-1 border-2 p-4 rounded-xl'>
                        <span>{coin}</span> Coin <BsCoin />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
