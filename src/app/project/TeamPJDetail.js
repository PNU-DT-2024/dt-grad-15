import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import TeamData from "../../components/team.json";
import "../../css/PJDetail.css";
import SubHeading from "../common/SubHeading";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";
function TeamPJDetail() {
    let { id } = useParams();
    const data = TeamData.team.find(item => item.name == id);
    return (
        <div>
            <Menu page='작품'/>
            <main className="contentsContainer">
                <MainTheme title={data.mainTitle} desc={data.mainDesc} />
                <hr className='horizontalLine' />
                <section className='itemContainer column'>
                    <SubHeading title={"영상"}/>
                    <div className='videoInfoContainer column'>
                        <h2 className='title'>{data.videoTitle}</h2>
                        <p className="description">{data.videoDesc}</p>
                    </div>
                    <div className='videoContainer'>
                        영상 들어갈 자리
                    </div>
                </section>
                <hr className='horizontalLine' />
                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />
                <hr className='horizontalLine' />
                <Link to={`/profile/team`}>
                    <div className='authorTeamContainer column'>
                        <p>{data.name}</p>
                        <div>
                            {data.member.map((member) => (
                                <span>{member}</span>
                            ))}
                        </div>
                    </div>
                </Link>
            </main>

            <Footer />
        </div >
    )
}
export default TeamPJDetail;