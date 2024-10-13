import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import data from "../../components/indiv.json";
import SubHeading from "../common/SubHeading";
import styles from "../../css/IndivPJ.module.css";
export default function IndivPJ({ indiv, mobile, tablet }) {
    // const isTablet = useMediaQuery({
    //     query: "(max-width: 1080px) and (min-width: 768px)"
    // });
    // const isMobile = useMediaQuery({
    //     query: "(max-width : 767px)"
    // });
    return (
        // <article className={isTablet ? styles.t_pjLink : isMobile ? styles.m_pjLink : styles.pjLink}>
        //     <Link to={`/project/indiv/${indiv.name}`}>
        <div className={`${styles.memberCard} ${mobile || tablet? styles.m_card:''}`}>
            <div>
                <img src="/img/posterImg/posterImg.png" alt={indiv.name}  className={styles.imgPj}/>
            </div>
            <div className={`${mobile ? styles.m_Info : styles.Info} ${styles.memberInfo} column`}>
                <h2>{indiv.mainTitle}</h2>
                <p>{indiv.name}</p>
            </div>
        </div>
        //     </Link>
        // </article>

    )

}
