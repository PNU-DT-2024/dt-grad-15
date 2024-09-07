import "../../css/Banner.css";
import btnInter from "../../components/img/btnInter.png"

export default function Banner({onBtnClick}) {
    return (
        <div className='banner'>
            <span>버</span>
            <button className='interBtn' onClick={onBtnClick}><img src={btnInter}/></button>
            <span>릇</span>
        </div>
    )
}