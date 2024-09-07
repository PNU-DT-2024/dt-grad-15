import Menu from "../common/Menu";
import { useParams } from "react-router-dom";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import "../../css/PJDetail.css";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";
import SubHeading from "../common/SubHeading";

import { Link } from "react-router-dom";
function IndivPJDetail() {
    let { id } = useParams();
    const data = indivData.indiv.find(item => item.name == id);
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <MainTheme title={data.mainTitle} desc={data.mainDesc} />
                <hr className="horizontalLine"/>
                <section className='itemContainer  row'>
                    <SubHeading title={"포스터"} />
                    <div className='posterImg'>
                        <img src="#" alt="#" />
                    </div>
                    <div className='posterContainer column'>
                        <h2 className='title'>{data.posterTitle}</h2>
                        <p className='desc description'>{data.posterDesc}</p>
                    </div>
                </section>
                <hr className="horizontalLine"/>
                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />
                <hr className="horizontalLine"/>
                <Link to={`/profile/indiv/${data.name}`}>
                    <div className='authorContainer row'>
                        <span>{data.name}</span>
                        <div className='profileImg'>
                            <img src="#" alt="#" />
                        </div>
                    </div>
                </Link>
            </main>

            <Footer />
        </div >
    )
}
export default IndivPJDetail;