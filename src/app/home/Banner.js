import { useMediaQuery } from "react-responsive";
import "../../css/Banner.css";

export default function Banner({ onBtnClick }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={isMobile?'m_banner':'banner'}>
            <span>버</span>
            <button className='interBtn' onClick={onBtnClick}><img src="/img/btnInter.png" /></button>
            <span>릇</span>
        </div>
    )
}