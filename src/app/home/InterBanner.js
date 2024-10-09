
import { useState } from 'react';
import "../../css/Banner.css";

export default function Banner({ onBtnClick }) {
    const images = [
        { url: '/img/icon/mainIMG.svg' },
        { url: '/img/image2.jpg' },
        { url: '/img/image3.jpg' },
        { url: '/img/image4.jpg' }
    ];
    const [locX, setX] = useState({ x: 0 })
    let mouseHandle = (e) => {
        const mouseX = e.clientX
        console.log(mouseX)
        setX({ x: mouseX });
    }
    return (
        <div className='interBanner'>
            <div className='imgMain'>
                <span role='button' ></span>
                <img src='/img/icon/mainIMG.svg' />
                <span role='button'></span>
            </div>
            <div className="mask" onMouseMove={mouseHandle}>
                <img src="/img/icon/mask.svg" alt="cursor" className="imgMask" style={{ position: 'absolute', transform: `translateX(calc(${locX.x}px - 50%))`, transition: 'all 0.5s ease-out' }} />
            </div >
            <button className='interBtnOff' onClick={onBtnClick}><img src="/img/btnInter.png" alt="" /></button>
        </div>


    )
}