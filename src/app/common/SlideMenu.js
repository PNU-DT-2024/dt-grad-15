import { NavLink } from "react-router-dom";
import styles from "../../css/SlideMenu.module.css";
export default function SlideMenu({ onBtnClick }) {

    return (
        <div className={`${styles.menuContainer} column`}>
            {/* <div className={styles.delMenu} onClick={onBtnClick}>X</div> */}
            <div className={styles.slideNav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p className={styles.mainLInk}>버릇</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>작가</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>작품</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/guestbook"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>방명록</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>소개</p>
                        </NavLink>
                    </li>

                </ul >
            </div>
        </div >
    )
}