import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Menu from "../common/Menu";
import Banner from "./Banner";
import InterBanner from "./InterBanner";
import Footer from "../common/Footer";
import styles from "../../css/Main.module.css"

export default function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });
  const [inter, setInter] = useState(true);
  function startInter() {
    setInter(!inter);
  }
  return (
    <div>

      <Menu main={true} />
      <main>
        <section>
          {inter === false ? (
            <InterBanner onBtnClick={startInter} />
          ) : (
            <Banner onBtnClick={startInter} />
          )}
        </section>
        <div style={{fontSize:'4rem', fontWeight:'700', textAlign:'center', padding:'64px 0', backgroundColor:'black', color:'white'}}>보수공사 중입니다....</div>
        {/* <div></div>
        <div>4 page</div>
        <div>5 page</div>
        <div>6 page</div>
        <div>7 page</div>
        <div>8 page</div> */}
      </main>
    </div>
  )
}