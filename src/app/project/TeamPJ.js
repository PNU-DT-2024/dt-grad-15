import { Link } from "react-router-dom";
import Menu from "../common/Menu";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import data from "../../components/team.json";
import styles from "../../css/TeamPJ.module.css";
import videoImg from "../../components/img/video/videoImg.png";
function TeamPJ() {
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title={"팀 프로젝트"}/>
                <section className='column'>
                    <hr className={styles.horizontalLine}/>
                    {data.team.map((item) => (
                        <article>
                            <div className={`${styles.teamCard} row`}>
                                <div className={styles.teamTitle}>
                                    <p>{item.name}</p>
                                    <h1>{item.mainTitle}</h1>
                                    <div className={styles.moveLink}>
                                        <Link to={`/project/team/${item.name}`}>
                                            <span>바로가기</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.pjImg}>
                                    <img src={videoImg} alt="프로젝트 이미지" />
                                </div>
                            </div>
                            <hr className={styles.horizontalLine}/>
                        </article>

                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )

}
export default TeamPJ;