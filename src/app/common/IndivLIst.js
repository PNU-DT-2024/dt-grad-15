import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import indivData from "../../components/indiv.json";
import styles from "../../css/indivList.module.css";
export default function IndivSelect({ type }) {
    const isTablet = useMediaQuery({
        query: "(max-width: 1080px) and (min-width: 768px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });
    const [isHovered, setIsHovered] = useState(false);
    const [isName, setname] = useState(null);
    const handleMouseEnter = (name) => {
        setIsHovered(true);
        setname(name);
        console.log('들어감', isHovered, name);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        setname(null);
        console.log('나감', isHovered);
    };
    return (
        <section className={`row ${styles.selectWrap}`}>
            <article className={`${styles.contentList} column`}>
                {indivData.list.map((item, index) => (
                    <Link key={item.index} to={`indiv/${item.name}`} className={styles.selectIndiv}>
                        <div className={`${index === indivData.list.length - 1 ? styles.lastList : ''} row`}
                            onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                            <p>{type === 'project' ? item.mainTitle : item.name}</p>
                            <p>{type === 'project' ? item.name : item.engName}</p>
                        </div>
                    </Link>
                ))}
            </article>
            {(isTablet || isMobile) ||
                <article className={styles.contentThumb}>
                    {isName != null ? (
                        type === 'project' ? (
                            <div>
                                <img src="/img/posterImg/박정혜_poster.png" alt={isName} />
                            </div>
                        ) : (
                            // <div>
                            //     <img src="/img/profileImg/박정혜_profile.png" alt={isname} />
                            // </div>
                            <div className={styles.imgAction}>
                                <img src={isHovered ? '/img/profileImg/trigger.png' : ""} className={`${styles.imgTrigger} ${isHovered ? styles.show : ""}`}
                                styles={{  right: (isHovered?'-40%':'-100%'), transition:'right 0.5s ease-in-out'}} alt="" />
                                <img src={isHovered ? "/img/profileImg/hoverProfileImg.png" : "/img/profileImg/박정혜_profile.png"} loading="lazy" alt={isName} className={styles.imgBase} />
                            </div>
                        )
                    ) : (type === 'project' ? (
                        <div>
                            <img src="/img/posterImg/posterImg.png" alt={isName} />
                        </div>
                    ) : (
                        <div>
                            <img src="/img/profileImg/hoverProfileImg.png" alt={isName} />
                        </div>
                    )
                    )}

                    {/* hover했을 때 스캐니메이션 애니메이션 */}
                </article>
            }
        </section>
    )
}