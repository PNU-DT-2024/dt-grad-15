import { NavLink } from "react-router-dom";
import styles from "../../css/SlideMenu.module.css";
export default function SlideMenu() {

    return (
        <div className={`${styles.gnbWrap} column`}>
            <div className={styles.slideNav}>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p className={`ko ${styles.mainLink}`}>버릇</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>PROFILE</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>PROJECT</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/guestbook"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>GUESTBOOK</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `${isActive ? styles.m_active : ""} ${styles.btnNav}`}
                        >
                            <p>INTRODUCTION</p>
                        </NavLink>
                    </li>

                </ul >
            </div>
        </div >
    )
}