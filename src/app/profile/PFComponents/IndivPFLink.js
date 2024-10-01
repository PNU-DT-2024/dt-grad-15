import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import styles from "../../../css/IndivPFLink.module.css";

export default function IndivPJLink({ item }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    // console.log(isHovered);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // console.log(isHovered);
  };

  return (
    <article className={isMobile ? styles.m_memberContainer : styles.memberContainer}>
      <Link to={`/profile/indiv/${item.name}`} >
        <div className={styles.memberCard} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isMobile ?
            <div className={styles.imgContainer}>
              <img src="/img/profileImg/trigger.png" className={`${styles.m_triggerImage}`} />
              <img src="/img/profileImg/hoverProfileImg.png" alt={item.name} className={styles.baseImage} />
            </div> :
            <div className={styles.imgContainer}>
              <img src={isHovered ? '/img/profileImg/trigger.png' : ""} className={`${styles.triggerImage} ${isHovered ? styles.show : ""}`} />
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
