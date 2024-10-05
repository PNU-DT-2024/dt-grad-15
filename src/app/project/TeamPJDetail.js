import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import TeamData from "../../components/team.json";
import ListLink from "../common/ListLink";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";
import "../../css/PJDetail.css";
function TeamPJDetail() {
    let { id } = useParams();
    const data = TeamData.list.find(item => item.name == id);
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const prev = data.index === 0 ? TeamData.list[2] : TeamData.list[data.index - 1];
    const next = data.index === 2 ? TeamData.list[0] : TeamData.list[data.index + 1];
    return (
        <div>
            <Menu page='작품' />
            <main className="pjContainer">
                <MainTheme title={data.mainTitle} desc={data.mainDesc} name={data.name} member={data.member} />
                <section className='box posterContainer'>
                    <div className={isMobile ? 'm_info column' : 'info row'}>
                        <h2>영상</h2>
                        <div>
                            <p className='titlePJ'>{data.videoTitle}</p>
                            <p className='desc description'>{data.videoDesc}</p>

                        </div>
                    </div>
                    <div className='videoContainer'>
                        영상 들어갈 자리
                    </div>
                </section>
                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />

            </main>
            <div className="box">
                <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/team/${prev.name}`} nextURL={`/project/team/${next.name}`} listURL="/project/team" />
            </div>
            <Footer />
        </div >
    )
}
export default TeamPJDetail;