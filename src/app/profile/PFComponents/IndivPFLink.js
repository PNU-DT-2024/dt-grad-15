import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "../../../css/IndivPFLink.module.css";

export default function IndivPFLink({ item }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log(isHovered);
    // console.log(isHovered);
  };

  return (
    <article className={isMobile ? styles.m_pjWrap : styles.pjWrap}>
      <Link to={`/profile/indiv/${item.name}`} >
        <div className={styles.memberCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isMobile ?
            <div className={styles.imgaction}>
              <img src="/img/profileImg/trigger.png" className={`${styles.m_imgTrigger}`} alt=""/>
              <img src="/img/profileImg/hoverProfileImg.png" alt={item.name} className={styles.baseImage} />
            </div> :
            <div className={styles.imgaction}>
              <img src={isHovered ? '/img/profileImg/trigger.png' : ""} className={`${styles.imgTrigger} ${isHovered ? styles.show : ""}`} alt=""/>
              <img src={isHovered ? "/img/profileImg/hoverProfileImg.png" : "/img/profileImg/박정혜_profile.jpg"} alt={item.name} className={styles.baseImage} />
            </div>
          }
          <div className={styles.memberInfo} >
            <h2>{item.name}</h2>
            {isMobile ? '' :
              <p>{item.engName}</p>
            }
          </div>
        </div>

      </Link>
    </article>
  );
}
