import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SlideMenu from "./SlideMenu";
import styles from "../../css/Menu.module.css"

function Menu({ page, main }) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // let background = main ? "none" : "var(--black)";
    // let color = main ? "var(--black)" : "white";
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const isTablet = useMediaQuery({
        query: "(max-width:1080px)"
    });

    const [isMenu, setIsMenu] = useState(false);
    let openMenu = () => {
        setIsMenu(!isMenu);
    }

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMobile, isTablet]);
    return (
        <nav
            className={`${styles.gnb} ${styles.stickyNav}`}
            style={{
                ...(main ? { position: 'absolute', top: 0, width: '100%', zIndex: 3 } : {}),
                transition: 'transform 0.3s',
                transform:isVisible ? 'translateY(0)' : 'translateY(-100%)'
            }}
        >

            <div className={`${styles.gnbWrap}`}>
                {isMobile ? <span className={`ko ${styles.m_loc}`}>{page}</span> :
                    <div className={styles.mainLink}>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.active : "")}>
                            <p className="ko">버릇</p>
                        </NavLink>
                    </div>
                }
                {isTablet ?

                    <div className={styles.nav}>
                        {/* <span onClick={openMenu}><img src="/img/icon/ic_menu.png " alt="메뉴" /></span> */}
                        <div onClick={openMenu} className={`${styles.icMenu} ${isMenu ? styles.active : ''}`} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {isMenu ? <SlideMenu onBtnClick={openMenu} /> : ""}
                    </div>
                    :

                    <div className={`${styles.nav} ${styles.w_font}`} >
                        <div>
                            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p>작가</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/project'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p>작품</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/guestbook'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p>방명록</p>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to={'/about'} className={({ isActive }) => (isActive ? styles.active : "")}>
                                <p>소개</p>
                            </NavLink>
                        </div>
                    </div>
                }

            </div>
        </nav>
    )
}
export default Menu;