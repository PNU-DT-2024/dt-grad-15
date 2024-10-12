import React, { useState } from 'react';
import { useMediaQuery } from "react-responsive";
import TeamPF from "../profile/TeamPF";
import TeamPJ from "../project/TeamPJ";

import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import Menu from "../common/Menu";
import styles from "../../css/Teams.module.css";


export default function Teams({ type }) {
    const teams = ['WEB', 'BRANDING', 'DP']
    const [hover, setHover] = useState(teams[0]);
    function onClickTeam(team) {
        setHover(team);
    }
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <Menu page={type === 'profile' ? '작가' : '작품'} />
            <main className="contentsContainer">
                <SubHeading title="팀" />
                <section className={isMobile?`${styles.m_teamList} column`:`${styles.teamList} row`}>
                    {/* <hr /> */}
                    {teams.map((team) => (
                        <article onClick={() => { onClickTeam(team) }} className={`${hover === team ? styles.teamCardOpen : styles.teamCardClose} column`}>
                            {hover === team
                                ? (type === 'profile'
                                    ? <TeamPF data={team} />
                                    : type === 'project' && <TeamPJ data={team} />)
                                : <div className={styles.closeTeam}>
                                    <p>{team}</p>
                                </div>
                            }


                        </article>

                    ))}
                </section>
            </main>
            <Footer />
        </div >
    )
}