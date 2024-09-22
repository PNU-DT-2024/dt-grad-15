import { useState } from "react";
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
  return (
    <section className={styles.interTxt} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered === true ? <Confetti /> : ""}

      <p>학생들에게 응원의 메시지를 전해주세요!</p>
    </section>
  );
}
