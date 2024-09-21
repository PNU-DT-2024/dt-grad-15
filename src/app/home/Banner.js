import "../../css/Banner.css";

export default function Banner({onBtnClick}) {
    return (
        <div className='banner'>
            <span>버</span>
            <button className='interBtn' onClick={onBtnClick}><img src="/img/btnInter.png"/></button>
            <span>릇</span>
        </div>
    )
}