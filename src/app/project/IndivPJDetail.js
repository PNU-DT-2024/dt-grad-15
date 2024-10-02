import Menu from "../common/Menu";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    
    return (
        <div>
            <Menu page='작품'/>
            <main className="contentsContainer">
                <MainTheme title={data.mainTitle} desc={data.mainDesc} />
                <hr className="horizontalLine" />
                <section className={`itemContainer`}>
                    <SubHeading title={"포스터"} />
                    <div className={`${isMobile ? 'column' : 'row'} posterContainer`}>
                        <div className={isMobile ? 'm_posterImg' : 'posterImg'}>
                            <video src="/img/posterImg/박정혜_poster.mp4" alt="#" controls />
                        </div>
                        <div className='posterInfo column'>
                            <h2 className='title'>{data.posterTitle}</h2>
                            <p className='desc description'>{data.posterDesc}</p>
                        </div>
                    </div>
                </section>
                <hr className="horizontalLine" />
                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />
                <hr className="horizontalLine" />
                <Link to={`/profile/indiv/${data.name}`}>
                    <div className='authorContainer row'>
                        <div className="column">
                            <span>{data.name}</span>
                            <span>{data.email}</span>
                        </div>
                        <div className='profileImg'>
                            <img src="/img/profileImg/박정혜_profile.jpg" alt="#" />
                        </div>
                    </div>
                </Link>
            </main>

            <Footer />
        </div >
    )
}
export default IndivPJDetail;