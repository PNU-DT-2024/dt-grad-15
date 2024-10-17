import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import indivData from "../../components/indiv.json";
import styles from "../../css/IndivSelect.module.css";
export default function IndivSelect({ type }) {
    const isTablet = useMediaQuery({
        query: "(max-width: 1280px) and (min-width: 768px)"
    });
    const isMobile = useMediaQuery({
        query: "(max-width : 767px)"
    });
    const [isHovered, setIsHovered] = useState(false);
    const [isname, setname] = useState(null);
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
                    {isname != null ? (
                        type === 'project' ? (
                            <div>
                                <img src="/img/posterImg/박정혜_poster.png" alt={isname} />
                            </div>
                        ) : (
                            <div>
                                <img src="/img/profileImg/박정혜_profile.png" alt={isname} />
                            </div>
                        )
                    ) : (type === 'project' ? (
                        <div>
                            <img src="/img/posterImg/posterImg.png" alt={isname} />
                        </div>
                    ) : (
                        <div>
                            <img src="/img/profileImg/hoverProfileImg.png" alt={isname} />
                        </div>
                    )
                    )}

                    {/* hover했을 때 스캐니메이션 애니메이션 */}
                </article>
            }
        </section>
    )
}