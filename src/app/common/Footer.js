import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "../../css/Footer.module.css";
function Footer() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContainer} ${isMobile ? 'column' : 'row'}`}>
                <div className={`${isMobile?styles.m_gradContainer:styles.gradContainer} column`}>
                    <div className={`${styles.exhibitionContainer} description`}>
                        <p>부산대학교 디자인학과 디자인앤테크놀로지 전공 15회 졸업전시 &lt;버릇&gt;</p>
                        <p>Dept. of Design, Design and Technology 15th Graduation Show</p>
                    </div>
                    <div className={`${styles.graduationContainer}`}>
                        <p>본 사이트는 2024 졸업논문을 대체합니다.</p>
                        <p>ⓒ 2024 Pusan National University Design&Technology all rights reserved.</p>
                    </div>
                </div>
                <div className={isMobile ? `row ${styles.m_imgContainer}` : `column ${styles.imgContainer}`}>

                    <div className={`${styles.linkContainer} row`}>
                        <div className={styles.imgLink}>
                            <Link to="https://www.instagram.com/pnu.dt.14/"><img src="/img/instaLogo.png" alt="인스타그램" /></Link>
                        </div>
                        <div className={styles.imgLink}>
                            <Link to="https://www.youtube.com/@pnudt"><img src="/img/youtubeLogo.png" alt="유튜브" /></Link>
                        </div>
                    </div>
                    <div className={styles.linkContainer}>
                        <Link to="https://www.pusan.ac.kr/kor/Main.do"><img src="/img/pnuLogo.png" className={styles.pnuLogo} alt="부산대학교" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;