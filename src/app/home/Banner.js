import { useMediaQuery } from "react-responsive";
import "../../css/Banner.css";

export default function Banner({ onBtnClick }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={`${isMobile ? 'm_banner' : 'banner'} row`}>
            <img src="/img/icon/faceL.svg" />
            <div className="mainTxtWrap column">
                <div>
                    <span className="ko">버</span>
                    <button className='interBtn' onClick={onBtnClick}><img src="/img/btnInter.png" /></button>
                    <span className="ko">릇</span>
                </div>
                <p>반복하여 몸에 익어 버린 행동, 즉 개인의
                    버릇을 조명한다.
                </p>
                <p>과거에서 형성된 버릇은
                    오늘날의 나를 결정짓고, 우리가 누구인지를
                    정의 할 수 있게 해주는 요인이 된다.</p>
                <p>
                    우리는 자신의 일상에서 자주 발생하는
                    반복적인 행동을 발견하고 이해하려는 과정에서
                    스스로가 어떤 가치를 추구하고 무엇으로부터
                    도망쳐왔으며 현재 어디에 머물러 있는지
                    직면하게 된다.
                </p>
                <p>
                    순간을 인정하는 시도는 점차 그 간극을 메워
                    전체를 이해하려는 노력으로 이어진다.
                </p>
                <p> 이 전시에서 우리는 삶의 반복된 순간들인 버릇을
                    통해 나와 타인을 이해하는 태도를 기르는
                    기회가 될 것이다.
                </p>
            </div>
            <img src="/img/icon/faceR.svg" />
        </div>
    )
}