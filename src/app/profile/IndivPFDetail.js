import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { changeName } from "../../components/store";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import Title from "../common/Title";
import ListLink, { setPrev, setNext } from "../common/ListLink";
import styles from "../../css/IndivPFDtail.module.css";

function IndivPFDetail() {
    let dispatch = useDispatch();
    let { id } = useParams();
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const data = indivData.list.find(item => item.name === id);
    const prev = setPrev(indivData, data);
    const next = setNext(indivData, data);

    return (
        <div>
            <Menu page='작가' />
            <main className={styles.pfContainer}>
                <section className={`box ${styles.content} ${styles.profile} ${isMobile ? 'column ' : 'row'}`}>
                    <div className={isMobile ? styles.m_porfileImg : styles.profileImg}>
                        <img src="/img/profileImg/박정혜_profile.jpg" alt="작가 사진" />
                        {isMobile &&
                            <div className={styles.m_signImg}>
                                <img className={styles.signiture} src="#" alt="#" />
                            </div>}
                    </div>
                    <div className={`${isMobile ? styles.m_txtWrap : styles.txtWrap} column`}>
                        <div className={`${styles.nameWrap} row`}>
                            <div className={`${isMobile ? styles.m_name : styles.name} column`}>
                                <Link to={'/profile/team'} onClick={() => dispatch(changeName(data.team))}>
                                    <span>{data.team}</span>
                                </Link>
                                <div className={isMobile ? `column` : `row`}>
                                    <span>{data.name}</span>
                                    <span>{data.engName}</span>
                                </div>
                            </div>
                            {isMobile ? <></> :
                                <div className={styles.signImg}>
                                    <img className={styles.signiture} src="#" alt="#" />
                                </div>
                            }
                        </div>
                        <div className={`${styles.sns} ${isMobile ? 'column' : 'row'}`}>
                            <div className={isMobile?'column':''}>
                                <span>SNS</span>
                                <Link to={`https://www.instagram.com/${data.insta}`} target='_blank'>
                                    <span>{data.insta}</span>
                                </Link>
                            </div>
                            <div className={isMobile?'column':''}>
                                <span>이메일</span>
                                <span>{data.email}</span>
                            </div>
                        </div>
                        <div className="description">{data.freeWrite}</div>
                    </div>
                </section>
                <section className={`box ${styles.content}`}>
                    {isMobile ? <></> : <Title title="작품" />}
                    <div className={`${styles.MoveLinkWrap} ${isMobile ? 'column' : 'row'}`}>
                        <div className={isMobile ? styles.m_moveLink : ''}>
                            <Link to={`/project/indiv/${data.name}`}>
                                <div className={styles.linkMove}>
                                    <div className={styles.indivPjImg}>
                                        <img src="#" alt="#" />
                                    </div>
                                    <p>개인 작품</p>
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
                                    <p>팀 작품</p>
                                    <p>{data.teamTitle}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className={`box ${styles.content}`}>
                    <ListLink prevName={prev.name} nextName={next.name} prevURL={`/profile/indiv/${prev.name}`} nextURL={`/profile/indiv/${next.name}`} listURL="/profile/indiv" />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default IndivPFDetail;