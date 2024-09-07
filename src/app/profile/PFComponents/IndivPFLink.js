import { Link } from "react-router-dom";
import styles from "../../../css/IndivPFLink.module.css"
import profileImg from "../../../components/img/profileImg/profileImg.png";

export default function IndivPJLink({item}) {
    return (
        <div>

            <Link to={`/profile/indiv/${item.name}`}>
                <div className={styles.memberCard}>
                    <div className={styles.imgMember}>
                        <img src={profileImg} alt={item.name} />
                    </div>
                    <div className={styles.memberInfo}>
                        <h2>{item.name}</h2>
                        <p>{item.engName}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}