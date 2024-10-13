import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";
import Footer from "./Footer";
import styles from "../../css/IndivSelect.module.css";
import SubHeading from "./SubHeading";
import IndivPJ from "../project/IndivPJ";
import IndivPF from "../profile/IndivPF"
import indivData from "../../components/indiv.json";
export default function IndivSelect({ type }) {
    const isTablet = useMediaQuery({
        query: "(max-width: 1080px) and (min-width: 768px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });
    return (
        <div>
            <Menu page='작가' />
            <main className="contentsContainer">
                <SubHeading title="작가" />
                <section className={isMobile || isTablet?styles.m_listWrap:styles.listWrap}>
                        {indivData.list.map((item) => (
                            <article className={styles.listMember}>
                                <Link to={`/${type}/indiv/${item.name}`}>
                                    {type === 'project' ? (<IndivPJ indiv={item} mobile={isMobile} tablet={isTablet} />)
                                        : type === 'profile' && (<IndivPF indiv={item} />)}
                                </Link>
                            </article>
                        ))}
                </section>
            </main>
            <Footer />
        </div >
    )
}