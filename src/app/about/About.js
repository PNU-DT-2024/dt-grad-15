import Menu from "../common/Menu"
import Footer from "../common/Footer"
import SubHeading from "../common/SubHeading"
import { motion } from "framer-motion";
import styles from "../../css/About.module.css";

export default function About() {
    // const motionProps = {
    //     initial: { opacity: 0, y: 50 },
    //     whileInView: { opacity: 1, y: 0 },
    //     viewport: { once: false },
    //     transition: { ease: "easeInOut", duration: 0.8 },
    // };
    return (
        <div>
            <Menu />
            <main>
                <section className={` section`}>
                    <div className={styles.hScreen}>
                        <div className={styles.subTitle}>
                            <SubHeading title={"전공 소개"} />
                        </div>
                        {/* <motion.div {...motionProps}> */}
                            <article className="contentsContainer row">
                                <div className={`${styles.captionContainer} cloumn`}>
                                    <h1 className={styles.title}>디자인앤테크놀로지전공</h1>
                                    <div className='description'>
                                        <p>
                                            첨단 전자 및 컴퓨터 공학을 포함한 기술적인 요소와 예술적
                                            감성의 조화를 필요로 하는 영상물의 분석, 기획, 제작, 편집
                                            기법 및 첨단 컴퓨터 기술의 실용적인 교육을 통해 영화 및
                                            비디오 영상, 디지털 시네마, 디지털 방송 등에 활용되는
                                            디지털콘텐츠 제작 기술 능력을 배양하고, 우수한
                                            디지털콘텐츠를 개발하여 산업화할 수 있는 디자인, 공학 전문
                                            인력을 양성하여 지역사회와 국가의 디지털콘텐츠 산업 발전 및
                                            경쟁력 제고에 이바지함을 목표로 한다.{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.imgDT}  ${styles.imgContainer}`}>
                                    <img src="img/building.png" alt="#" />
                                </div>
                            </article>
                        {/* </motion.div> */}
                    </div>
                </section>
                <section>
                    <div className={styles.hScreen}>
                        <div className={styles.subTitle}>
                            <SubHeading title={"교수진"} />
                        </div>
                        {/* <motion.div {...motionProps}> */}
                            <article
                                className={`${styles.itemContainer}  contentsContainer column`}
                            >
                                <h1 className={styles.title}>전임교수 & 지도교수</h1>
                                <div className={`${styles.profContainer} row`}>
                                    <div className={styles.prof}>
                                        <div className={styles.imgProf}>
                                            <img src="/img/profileImg/김태완교수님.webp" alt="#" />
                                        </div>
                                        <p>김태완</p>
                                    </div>
                                    <div className={styles.prof}>
                                        <div className={styles.imgProf}>
                                            <img src="/img/profileImg/김철기교수님.webp" alt="#" />
                                        </div>
                                        <p>김철기</p>
                                    </div>
                                    <div className={styles.prof}>
                                        <div className={styles.imgProf}>
                                            <img src="/img/profileImg/이화세교수님.webp" alt="#" />
                                        </div>
                                        <p>이화세</p>
                                    </div>
                                    <div className={styles.prof}>
                                        <div className={styles.imgProf}>
                                            <img src="/img/profileImg/이화세교수님.webp" alt="#" />
                                        </div>
                                        <p>홍동진</p>
                                    </div>
                                </div>
                            </article>
                        {/* </motion.div> */}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}