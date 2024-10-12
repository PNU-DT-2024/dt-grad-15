
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import TeamData from "../../components/team.json";
import styles from "../../css/TeamPF.module.css";
function TeamPF({ data }) {
    const team = TeamData.list.find(item => item.name === data)
    function debugTeam() {
        console.log(team);
    }
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div onClick={debugTeam} className={styles.teamCard}>
            <div className={styles.teamTitle}>
                <h1>{team.name}</h1>
                <p className="description">{team.role}</p>
            </div>
            <div className={styles.teamMember}>
                <p>구성원</p>
                <div className={isMobile ? styles.m_member :styles.member}>

                    {team.member.map((member) => (
                        <Link to={`/profile/indiv/${member}`}>
                            <div className={styles.memberImg}>
                                <img src="/img/profileImg/박정혜_profile.jpg" alt="#" />
                            </div>
                            <div>{member}</div>

                        </Link>
                    ))}
                </div>
            </div>
            <Link to={`/project/team/${team.name}`}>
                <div className={styles.moveLink}>
                    <span>작품 보러가기</span>
                </div>
            </Link>
        </div>
    )
}
export default TeamPF;