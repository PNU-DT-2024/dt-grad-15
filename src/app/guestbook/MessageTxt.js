import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Sparkle from "./Sparkle";
import Confetti from "./Confetti";
import styles from "../../css/MessageTxt.module.css";
export default function MessageTxt() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });
  return (
    <section className={styles.interTxt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered === true && isMobile ? <Confetti /> : ""}

      <p className={isMobile?styles.m_txt:styles.txt}>학생들에게 응원의 메시지를 전해주세요!</p>
    </section>
  );
}
