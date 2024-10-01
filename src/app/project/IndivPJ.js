import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import data from "../../components/indiv.json";
import styles from "../../css/IndivPJ.module.css";
import SubHeading from "../common/SubHeading";
export default function IndivPJ() {
    const isMobile = useMediaQuery({
        query:"(max-width : 767px)"
    });
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title="개인 작품" />
                <section className={styles.listWrap}>
                    <div className={styles.memberList}>
                        {data.indiv.map((item) => (
                            <article className={isMobile?styles.m_memberContainer:styles.memberContainer}>
                                <Link to={`/project/indiv/${item.name}`}>
                                    <div className={styles.memberCard}>
                                        <div className={styles.imgPj}>
                                            <img src="/img/posterImg/posterImg.png" alt={item.name} />
                                        </div>
                                        <div className={`${isMobile?styles.m_Info:styles.Info} ${styles.memberInfo} column`}>
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
