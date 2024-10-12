import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TeamData from "../../components/team.json";
import styles from "../../css/TeamPJ.module.css";

function TeamPJ({ data }) {
    const team = TeamData.list.find(item => item.name === data);
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <Link to={`/project/team/${team.name}`} className={styles.linkTeamPJ}>
            <div className={`${styles.teamCard} ${isMobile? `${styles.m_card} column`:'row'}`}>
                <div className={styles.teamTitle}>
                    <p>{team.name}</p>
                    <h1>{team.mainTitle}</h1>
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
    )

}
export default TeamPJ;