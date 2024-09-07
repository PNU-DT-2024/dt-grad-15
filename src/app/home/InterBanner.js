import "../../css/Banner.css";
import btnInter from "../../components/img/btnInter.png"

export default function Banner({onBtnClick}) {
    return (
        <div className='interBanner'>
            <button className='interBtn' onClick={onBtnClick}><img src={btnInter}/></button>
        </div>
    )
}