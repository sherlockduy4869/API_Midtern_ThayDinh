import React from "react";
import { Link } from "react-router-dom";
import images from '../../constants/images';
import { FaSearch } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <Link to="/">
                <img src={images.at10} alt="logo" />
                </Link>
            </div>
            <ul className="app__navbar-links">
                <li className="p__cuprum"><a href="#home">Trang chủ</a></li>
                <li className="p__cuprum"><a href="#about">Giới thiệu</a></li>
                <Link to="/">
                    <li className="p__cuprum"><a href="#product">Sản phẩm</a></li>
                </Link>
                <li className="p__cuprum"><a href="#contact">Liên hệ</a></li>
                <li className="p__cuprum"><a href="#guide">Hướng dẫn</a></li>
                <div className="app__navbar-search">
                    <FaSearch />
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;