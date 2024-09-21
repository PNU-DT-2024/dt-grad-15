import "../../css/Banner.css";

export default function Banner({onBtnClick}) {
    return (
        <div className='interBanner'>
            <button className='interBtn' onClick={onBtnClick}><img src="/img/btnInter.png"/></button>
        </div>
    )
}