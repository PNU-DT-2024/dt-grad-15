import { Link } from "react-router-dom";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import data from "../../components/indiv.json";
import styles from "../../css/IndivPJ.module.css";
import SubHeading from "../common/SubHeading";
import posterImg from "../../components/img/posterImg/posterImg.png";
function IndivPJ() {
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <SubHeading title="개인 프로젝트" />
                <section className={styles.listWrap}>
                    <div className={styles.memberList}>
                        {data.indiv.map((item) => (
                            <article>
                                <Link to={`/project/indiv/${item.name}`}>
                                    <div className={styles.memberCard}>
                                        <div className={styles.imgPj}>
                                            <img src={posterImg} alt={item.name} />
                                        </div>
                                        <div className={styles.memberInfo}>
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
export default IndivPJ;