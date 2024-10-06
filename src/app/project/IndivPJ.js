import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import data from "../../components/indiv.json";
import SubHeading from "../common/SubHeading";
import styles from "../../css/IndivPJ.module.css";
export default function IndivPJ() {
    const isTablet = useMediaQuery({
        query: "(max-width: 1023px) and (min-width: 768px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });
    return (
        <div>
            <Menu page='작품' />
            <main className="contentsContainer">
                <SubHeading title="개인 작품" />
                <section className={styles.listWrap}>
                    <div className={styles.memberList}>
                        {data.list.map((item) => (
                            <article className={isTablet ? styles.t_pjLink : isMobile ? styles.m_pjLink : styles.pjLink}>
                                <Link to={`/project/indiv/${item.name}`}>
                                    <div className={styles.memberCard}>
                                        <div className={styles.imgPj}>
                                            <img src="/img/posterImg/posterImg.png" alt={item.name} />
                                        </div>
                                        <div className={`${isMobile ? styles.m_Info : styles.Info} ${styles.memberInfo} column`}>
                                            <h2>{item.mainTitle}</h2>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )

}
