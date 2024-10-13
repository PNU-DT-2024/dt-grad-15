import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "../../css/IndivPF.module.css";

export default function IndivPF({ indiv }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.memberCard} ${isMobile?'column':''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isMobile ?
        <div className={styles.m_imgAction}>
          <img src="/img/profileImg/박정혜_profile.jpg" alt={indiv.name} className={styles.m_imgBase} />
        </div>
        :
        <div className={styles.imgAction}>
          <img src={isHovered ? '/img/profileImg/trigger.png' : ""} className={`${styles.imgTrigger} ${isHovered ? styles.show : ""}`} alt="" />
          <img src={isHovered ? "/img/profileImg/hoverProfileImg.png" : "/img/profileImg/박정혜_profile.jpg"} loading="lazy" alt={indiv.name} className={styles.imgBase} />
        </div>
      }
      <div className={isMobile ? styles.m_memberInfo : styles.memberInfo} >
        <h2>{indiv.name}</h2>
        <p>{indiv.engName}</p>
      </div>
    </div>

    //   </Link>
    // </article>
  );
}
