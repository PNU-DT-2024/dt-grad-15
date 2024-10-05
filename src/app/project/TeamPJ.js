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
            <Menu page='작품' />
            <main className="contentsContainer">
                <SubHeading title={"팀 작품"} />
                <section className='column'>
                    {/* <hr className={styles.horizontalLine}/> */}
                    {data.list.map((item) => (
                        <article onClick={() => { onClickTeam(item.name) }} className={hover === item.name ? styles.teamCardOpen : styles.teamCardClose}>
                            {hover === item.name ?
                                <Link to={`/project/team/${item.name}`}>
                                    <div className={`${styles.teamCard} row`}>
                                        <div className={styles.teamTitle}>
                                            <p>{item.name}</p>
                                            <h1>{item.mainTitle}</h1>
                                            {/* <div className={styles.moveLink}>
                                                <span>바로가기</span>
                                            </div> */}
                                        </div>
                                        <div className={styles.imgPj}>
                                            <div>
                                                <img src="/img/video/videoImg.png" alt="작품 이미지" />
                                            </div>
                                            <div>
                                                <p>팀 작품 보러가기</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                :
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