import { Link } from "react-router-dom";
import styles from "../../css/Menu.module.css"

function Menu({ page }) {
    let background = page === "main" ? "none" : "black";
    let color = page === "main" ? "black" : "white";
    return (
        <nav className={styles.menuWrap} style={{ backgroundColor: background }}>
            <div className={`${styles.menuContainer}`}>
                <div className={styles.mainLink}>
                    <Link to={'/'}>
                        <p style={{ color: color }}>버릇</p>
                    </Link>
                </div>
                <div className={styles.nav} >
                    <div>
                        <Link to={'/profile'}>
                            <p style={{ color: color }} >프로필</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/project'}>
                            <p style={{ color: color }}>프로젝트</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/guestbook'}>
                            <p style={{ color: color }}>방명록</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/about'}>
                            <p style={{ color: color }}>about</p>
                        </Link>
                    </div>
                </div>

            </div>
        </nav>
    )
}
export default Menu;