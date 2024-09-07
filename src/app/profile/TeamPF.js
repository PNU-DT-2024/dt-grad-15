import Menu from "../common/Menu";
// import { useParams } from "react-router-dom";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import data from "../../components/team.json";
import styles from "../../css/TeamPF.module.css";
function TeamPF() {
    // let { id } = useParams();
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title={"팀 프로필"} />
                <section className={`${styles.teamList} row`}>
                    {/* <hr /> */}
                    {data.team.map((item) => (
                        <article className={`${styles.teamCardOpen} ${styles.teamCardClose} coloumn`}>
                            {/* <div className={styles.columnName}>
                                <span>{item.name}</span>
                            </div> */}
                            <div>
                            <div className={styles.teamTitle}>
                                <h1>{item.name}</h1>
                                <p className="description">{item.role}</p>
                            </div>
                            <div className={styles.teamMember}>
                                <p>구성원</p>
                                <div className={`${styles.memberContainer} row`}>
                                    {item.member.map((member) => (
                                        <div>
                                            <Link to={`/profile/indiv/${member}`}>
                                                <div className={styles.memberImg}>
                                                    <img src="#" alt="#" />
                                                </div>
                                                <div>{member}</div>

                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.moveLink}>
                                <Link to={`/project/team/${item.name}`}>
                                    <span>팀 프로젝트 보러가기</span>
                                </Link>
                                </div>
                            </div>
                        </article>

                    ))}
                </section>
            </main>
            <Footer />
        </div >
    )
}
export default TeamPF;