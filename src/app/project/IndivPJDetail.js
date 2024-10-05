import Menu from "../common/Menu";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import Footer from "../common/Footer";
import indivData from "../../components/indiv.json";
import ListLink from "../common/ListLink";
import "../../css/PJDetail.css";
import MainTheme from "./PJComponents/MainTheme";
import InterTheme from "./PJComponents/InterTeme";

import { Link } from "react-router-dom";
function IndivPJDetail() {
    let { id } = useParams();
    const data = indivData.list.find(item => item.name == id);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // 재생 상태를 관리하는 state
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    const prev = data.index === 0 ? indivData.list[12] : indivData.list[data.index - 1];
    const next = data.index === 12 ? indivData.list[1] : indivData.list[data.index + 1];
    // useRef로 video 요소에 접근할 수 있는 참조 생성

    // 버튼 클릭 시 동영상을 재생하는 함수
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause(); // 현재 재생 중이면 멈춤
            } else {
                videoRef.current.currentTime = 0; // 동영상의 현재 시간을 0으로 설정
                videoRef.current.play(); // 동영상 재생
            }
            setIsPlaying(!isPlaying); // 재생 상태를 반전시킴
        }
    };
    return (
        <div>
            <Menu page='작품' />
            <main className="pjContainer">
                <MainTheme title={data.mainTitle} desc={data.mainDesc} name={data.name} email={data.email} />
                <section className='box posterContainer'>
                    <div className={isMobile ? 'm_info column' : 'info row'}>
                        <h2>모션 포스터</h2>
                        <div>
                            <p className='titlePJ'>{data.posterTitle}</p>
                            <p className='desc description'>{data.posterDesc}</p>
                            <div className="row btnPoster">
                                <p>{isPlaying ? '중단' : '포스터 재생'}</p><button onClick={togglePlayPause}><img src={isPlaying ? 'stop' : 'playing'}></img></button>

                            </div>
                        </div>
                    </div>
                    <div className={isMobile ? 'm_motionPoster' : 'motionPoster'}>
                        <video src="/img/posterImg/박정혜_poster.mp4" alt="#" ref={videoRef} preload="auto" style={{ display: isPlaying ? 'block' : 'none' }} />
                        <img src="/img/posterImg/박정혜_poster.png" style={{ display: isPlaying ? 'none' : 'block' }} />
                    </div>
                </section>

                <InterTheme title={data.interTitle} desc={data.interDesc} format={data.interFormat} step={data.interStep} />

                <div className="box">
                    <ListLink prevName={prev.mainTitle} nextName={next.mainTitle} prevURL={`/project/indiv/${prev.name}`} nextURL={`/project/indiv/${next.name}`} listURL="/project/indiv" />
                </div>
            </main>

            <Footer />
        </div >
    )
}
export default IndivPJDetail;