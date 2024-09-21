import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Menu from "../common/Menu";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import data from "../../components/team.json";
import styles from "../../css/TeamPJ.module.css";

function TeamPJ() {
    const [hover, setHover] = useState('WEB');
    function onClickTeam(team) {
        setHover(team);
    }
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title={"팀 프로젝트"} />
                <section className='column'>
                    {/* <hr className={styles.horizontalLine}/> */}
                    {data.team.map((item) => (
                        <article onClick={() => { onClickTeam(item.name) }} className={hover === item.name ? styles.teamCardOpen : styles.teamCardClose}>
                            {hover === item.name ?
                                <div className="row">
                                    <div className={styles.teamTitle}>
                                        <p>{item.name}</p>
                                        <h1>{item.mainTitle}</h1>
                                        <Link to={`/project/team/${item.name}`}>
                                            <div className={styles.moveLink}>
                                                <span>바로가기</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className={styles.pjImg}>
                                        <img src="/img/video/videoImg.png" alt="프로젝트 이미지" />
                                    </div>
                                </div> :
                                <div className={styles.closeTeam}>
                                    <span>{item.name}</span>
                                </div>}



                        </article>

                    ))}
                </section>
            </main>
            <Footer />
        </div>
    )

}
export default TeamPJ;