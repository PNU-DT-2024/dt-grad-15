import Menu from "../common/Menu";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import Title from "../common/Title";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../../css/IndivPFDtail.module.css";
import { Link } from "react-router-dom";

function IndivPFDetail() {
    let { id } = useParams();

    const data = indivData.indiv.find(item => item.name == id);
    useEffect(() => {
        const data = indivData.indiv.find(item => item.name == id);
        console.log(data);
        // console.log("hi")
    });
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <section className={`${styles.profileContainer} row`}>
                    <div className={styles.profileImg}>
                        <img src="#" alt="프로필 사진" />
                    </div>
                    <div className={`${styles.infoContainer} column`}>
                        <div className='row'>
                            <div className={`${styles.personalInfo} column`}>
                                <Link to={"/profile/team"}>
                                    <p>{data.team}</p>
                                </Link>
                                <div className="row">
                                    <h1>{data.name}</h1>
                                    <span>{data.engName}</span>
                                </div>
                                <p>{data.email}</p>
                            </div>
                            <div className={styles.signImg}>
                                <img className={styles.signiture} src="#" alt="#" />
                            </div>
                        </div>
                        <div className="description">{data.freeWrite}</div>
                    </div>
                </section>
                <section >
                    <Title title="프로젝트" />
                    <div className={`${styles.moveLinkContainer} row`}>
                        <div>
                            <Link to={`/project/indiv/${data.name}`}>
                                <div className={styles.linkMove}>
                                    <div className={styles.indivPjImg}>
                                        <img src="#" alt="#" />
                                    </div>
                                    <p>개인 프로젝트</p>
                                    <p>{data.mainTitle}</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to={`/project/team/${data.team}`}>
                                <div className={styles.linkMove}>
                                    <div className={styles.teamPjImg}>
                                        <img src="#" alt="#" />
                                    </div>
                                    <p>팀 프로젝트</p>
                                    <p>{data.teamTitle}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default IndivPFDetail;