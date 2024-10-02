import Menu from "../common/Menu";
import Footer from "../common/Footer";
import data from "../../components/indiv.json";
import styles from "../../css/IndivPF.module.css";
import SubHeading from "../common/SubHeading";
import IndivPFLink from "./PFComponents/IndivPFLink";
function IndivPF() {

    return (
        <div>
            <Menu page='작가'/>
            <main className="contentsContainer">
                <SubHeading title="개인 작가" />
                <section className={styles.listWrap}>
                    <div className={styles.memberList}>
                        {data.indiv.map((item) => (
                            <IndivPFLink item={item}/>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )

}
export default IndivPF;