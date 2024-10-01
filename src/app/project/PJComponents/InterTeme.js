import { useMediaQuery } from "react-responsive";
import InterStep from "./InterStep";
import SubHeading from "../../common/SubHeading";
import "../../../css/PJDetail.css";
import { query } from "firebase/database";
export default function InterTheme({ title, desc, format, step }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <section className='itemContainer'>
            <SubHeading title={"인터랙티브 아트"} />
            <div className="colum">
                <div className={` ${isMobile ? 'column m_interContainer' : 'row interContainer'}`}>
                    <div className='interInfo colounm'>
                        <h2 className='title'>{title}</h2>
                        <p className="description">{desc}</p>
                        <p>{format}</p>
                    </div>
                    <div className='interImg' >
                        <img src="/img/project/김나연_map.webp" alt="#" />
                    </div>
                </div>
                <div className={`interStep  ${isMobile ? 'column' : 'row'}`}>
                    {step.map((item, idx) => (
                        <InterStep key={idx} imgUrl={`/img/project/김나연_step${idx+1}.webp`} step={item} />
                    ))}
                </div>
                <div className='interVideo'>
                    hi
                </div>
            </div>
        </section>
    )
}