'use client'
import  { useEffect, useState } from 'react';

// Styles
import '../styles/Nav.css';

// Components


// Icons
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

// Images
import logo from '../../public/logo.webp';
import { Link } from 'react-router-dom';


const Nav = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    const HandleNavBar = () => {
        const itemOpen = document.getElementById('open-menu');
        const itemClose = document.getElementById('close-menu');
        const listNav = document.getElementById('list-nav');

        setOpenMenu(!openMenu);
        setTimeout(() => {
            if (openMenu === false) {
                itemOpen.style.display = 'none';
            } else {
                itemOpen.style.display = 'flex';
                itemOpen.style.animation = 'reverseOpenMenu 250ms linear forwards';
                listNav.style.display = 'none';
            };

        }, 250);

        setCloseMenu(!closeMenu);

        setTimeout(() => {
            if (closeMenu === true) {
                itemClose.style.display = 'none';
            } else {
                itemClose.style.display = 'block';
                listNav.style.display = 'block';
            };
        }, 251);
    };

    useEffect(() => {
        document.getElementById('list-nav').style.display = 'none';
    }, []);


    return (
        <nav>
            <div className="container-img">
                <img
                    src={logo}
                    alt="E-commerce's logo"
                    />
            </div>
            <div className="container-menu">
                <IoMdMenu
                    id='open-menu'
                    className={openMenu ? 'active-open-menu' : ''}
                    onClick={() => HandleNavBar()}
                />

                <MdOutlineClose
                    id='close-menu'
                    className={closeMenu ? 'active-close-menu' : ''}
                    onClick={() => HandleNavBar()}
                />
            </div>
            <div id="list-nav">

                <ul>
                    <li>Discovery</li>
                    <li>About</li>
                    <li>ContactUs</li>
                </ul>
            </div>

            <div className="cta-nav">
                <Link to={'/login'} aria-label='Link to login' ><FaRegUser /></Link>
                <Link to={'/cart'} aria-label='Link to cart' ><FiShoppingCart /></Link>

            </div>
        </nav>
    );
}

export default Nav;
