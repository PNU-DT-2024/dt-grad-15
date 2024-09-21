import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../../css/IndivPFLink.module.css";

export default function IndivPJLink({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Link
        to={`/profile/indiv/${item.name}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.memberCard}>
          <div className={styles.imgContainer}>
            {/* Hover 상태에서 보이는 이미지 */}
            <img
              src={isHovered ? "/img/profileImg/trigger.png" : ""}
              // alt="Trigger Image"
              className={`${styles.triggerImage} ${
                isHovered ? styles.show : ""
              }`}
            />
            {/* 기본 상태에서 보이는 이미지 */}
            <img
              src={isHovered ? "/img/profileImg/hoverProfileImg.png" : "/img/profileImg/defaultProfileImg.png"}
              alt={item.name}
              className={styles.baseImage}
            />
          </div>
          {/* Hover 상태일 때 memberInfo 숨김 */}
          <div
            className={styles.memberInfo}
            style={{ visibility: isHovered ? "hidden" : "visible" }}
          >
            <h2>{item.name}</h2>
            <p>{item.engName}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
