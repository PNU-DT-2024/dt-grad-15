import { useMediaQuery } from "react-responsive";
import "../../css/Banner.css";

export default function Banner({onBtnClick}) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={isMobile?'m_interBanner':'interBanner'}>
            <button className='interBtn' onClick={onBtnClick}><img src="/img/btnInter.png"/></button>
        </div>
    )
}