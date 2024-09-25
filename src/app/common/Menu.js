import { NavLink } from "react-router-dom";
import styles from "../../css/Menu.module.css"

function Menu({ page }) {
    let background = page === "main" ? "none" : "black";
    let color = page === "main" ? "black" : "white";
    return (
        <nav className={styles.menuWrap} style={{ backgroundColor: background }}>
            <div className={`${styles.menuContainer}`}>
                <div className={styles.mainLink}>
                    <NavLink to={'/'} className={({isActive}) => (isActive? styles.active:"")}>
                        <p style={{ color: color }}>버릇</p>
                    </NavLink>
                </div>
                <div className={styles.nav} >
                    <div>
                        <NavLink to={'/profile'} className={({isActive}) => (isActive? styles.active:"")}>
                            <p style={{ color: color }} >프로필</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/project'} className={({isActive}) => (isActive? styles.active:"")}>
                            <p style={{ color: color }}>프로젝트</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/guestbook'} className={({isActive}) => (isActive? styles.active:"")}>
                            <p style={{ color: color }}>방명록</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to={'/about'} className={({isActive}) => (isActive? styles.active:"")}>
                            <p style={{ color: color }}>소개</p>
                        </NavLink>
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default Menu;