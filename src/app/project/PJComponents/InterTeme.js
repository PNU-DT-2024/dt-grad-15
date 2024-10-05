import { useMediaQuery } from "react-responsive";
import InterStep from "./InterStep";
import "../../../css/PJDetail.css";

export default function InterTheme({ title, desc, format, step }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <section className='box itemContainer'>
            <div className="colum">
                <div className={` ${isMobile ? 'column m_interContainer' : 'row interContainer'}`}>
                    <div className={isMobile ? 'm_info column' : 'info row'}>
                        <h2>인터랙티브 아트</h2>
                        <div>
                            <p className='titlePJ'>{title}</p>
                            <p className='desc description'>{desc}</p>
                            <p className="format">{format}</p>
                        </div>
                    </div>

                </div>
                <div className={`interStep  ${isMobile ? 'column' : 'row'}`}>
                    <div className='imgInter' >
                        <img src="/img/project/김나연_map.webp" alt="#" />
                    </div>
                    <div className={`{isMobile ? 'm_interStep' : 'interStep'} row`}>
                        {step.map((item, idx) => (
                            <InterStep key={idx} imgUrl={`/img/project/김나연_step${idx + 1}.webp`} step={item} />
                        ))}
                    </div>
                </div>
                <div className='interVideo'>
                    hi
                </div>
            </div>
        </section>
    )
}