import Menu from "../common/Menu";
import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";
import data from "../../components/team.json";
import styles from "../../css/TeamPF.module.css";
function TeamPF() {
    // let { id } = useParams();
    const [hover, setHover] = useState('WEB');
    function onClickTeam(team) {
        setHover(team);
    }
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title={"팀 프로필"} />
                <section className={`${styles.teamList} row`}>
                    {/* <hr /> */}
                    {data.team.map((item) => (
                        <article onClick={() => { onClickTeam(item.name) }} className={`${hover === item.name ? styles.teamCardOpen : styles.teamCardClose} coloumn`}>
                            {hover === item.name ? <div>
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
                                                        <img src="/img/profileImg/박정혜_profile.jpg" alt="#" />
                                                    </div>
                                                    <div>{member}</div>

                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Link to={`/project/team/${item.name}`}>
                                    <div className={styles.moveLink}>
                                        <span>팀 프로젝트 보러가기</span>
                                    </div>
                                </Link>
                            </div> : <div className={styles.closeTeam}>
                                <span>{item.name}</span>
                            </div>}

                        </article>

                    ))}
                </section>
            </main>
            <Footer />
        </div >
    )
}
export default TeamPF;