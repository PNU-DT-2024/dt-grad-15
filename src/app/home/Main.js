import { useState } from "react";
import Menu from "../common/Menu";
import Banner from "./Banner";
import InterBanner from "./InterBanner";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import styles from "../../css/Main.module.css";
import KakaoMap from "../../kakaoMap";
import { motion } from "framer-motion";

function Main() {
  const [inter, setInter] = useState(true);

  function startInter() {
    // console.log("버튼 클릭 : ", inter);
    setInter(!inter);
  }
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { ease: "easeInOut", duration: 0.8 },
  };

  return (
    <div>
      <Menu page="main" />
      <main className={styles.snappingContainer}>
        <section className={styles.hScreen}>
          {inter == false ? (
            <InterBanner onBtnClick={startInter} />
          ) : (
            <Banner onBtnClick={startInter} />
          )}
        </section>
        <section className={`${styles.hScreen}`}>
          <div className={styles.subTitle}>
            <SubHeading title={"전시 개요"} />
          </div>
          <motion.div {...motionProps}>
            <article className="contentsContainer column">
              <div className={`${styles.captionContainer} ${styles.outline}`}>
                <h1 className={`${styles.title} ${styles.mainTitle}`}>버릇</h1>
                <div className={`${styles.txtContainer} description`}>
                  <p>
                    우리 삶에서 반복되는 행동, 즉 '버릇'이 개인의 삶에 미치는
                    영향을 조명한다. 과거에서 형성된 버릇은 오늘날의 나를
                    결정짓고, 우리가 누구인지를 정의 할 수 있게 해주는 요인이
                    된다.
                  </p>
                  <p>
                    이 전시를 통해 우리는 자신의 일상에서 자주 발생하는 반복적인
                    행동을 발견하고 이해할 수 있다. 그 과정 속에서 우리는 우리가
                    무슨 가치를 추구하고, 무엇으로 부터 도망치며, 어떤 상황에
                    어떻게 반응하는지 직면하게 된다.
                  </p>
                  <p>
                    우리 삶의 흔적인 '버릇'을 통해 나를 인정하고, 타인을
                    이해하는 태도를 기르는 기회가 될 것이다.{" "}
                  </p>
                </div>
                <p className={styles.endnotes}>
                  부산대학교 Design & Technology 15회 졸업 전시
                </p>
              </div>
            </article>
          </motion.div>
        </section>

        <section className={`${styles.hScreen}`}>
          <div className={styles.subTitle}>
            <SubHeading title={"포스터 소개"} />
          </div>
          <motion.div {...motionProps}>
            <article className="contentsContainer row">
              <div className={`${styles.imgPoster} ${styles.imgContainer}`}>
                <img
                  src="/img/mainPoster.jpg"
                  alt="#"
                  style={{ width: "400px", height: "600px" }}
                />
              </div>

              <div className={styles.captionContainer}>
                <h1 className={styles.title}>전시 포스터</h1>
                <div className={`${styles.txtContainer} description`}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </article>
          </motion.div>
        </section>

        <section className={`${styles.hScreen} ${styles.video}`}>
          오프닝 영상
        </section>

        <section className={`${styles.hScreen}`}>
          <div className={styles.subTitle}>
            <SubHeading title={"전시 인원"} />
          </div>
          <motion.div {...motionProps}>
            <article className="contentsContainer column">
              <div className={styles.imgMember}>
                <img
                  src="/img/groupPhoto.png"
                  alt="#"
                  style={{ width: "800px", height: "500px" }}
                />
              </div>
              <div
                className={`${styles.txtContainer} ${styles.memberTxt} description`}
              >
                <p>이상화 · 박서해 · 왕신웨 · 이지은 · 김경린 · 김은선</p>
                <p>
                  박정혜 · 최시아 · 김동성 · 박승찬 · 오여슬 · 이민서 · 조성원{" "}
                </p>
              </div>
            </article>
          </motion.div>
        </section>

        <section className={`${styles.hScreen}`}>
          <div className={styles.subTitle}>
            <SubHeading title={"전공 소개"} />
          </div>
          <motion.div {...motionProps}>
            <article className="contentsContainer row">
              <div className={styles.captionContainer}>
                <h1 className={styles.title}>디자인앤테크놀로지전공</h1>
                <div className={`${styles.txtContainer} description`}>
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
          </motion.div>
        </section>
        <section className={`${styles.hScreen}`}>
          <div className={styles.subTitle}>
            <SubHeading title={"교수진"} />
          </div>
          <motion.div {...motionProps}>
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
          </motion.div>
        </section>
        <section className={styles.hScreen}>
          <div className={styles.subTitle}>
            <SubHeading title={"위치 및 시간"} />
          </div>
          <motion.div {...motionProps}>
            <article className="contentsContainer row">
              <div className={`${styles.imgMap} ${styles.imgContainer}`}>
                <KakaoMap />
              </div>
              <div className={styles.captionContainer}>
                <h1 className={styles.title}>오시는 길</h1>
                <div className={`${styles.description} ${styles.locInfo}`}>
                  <p>부산 디자인 진흥원 1층 전시장</p>
                  <div className={`${styles.txtContainer} description`}>
                    <p>2024. 11. 01 ~ 11. 04</p>
                    <p>Exhibition 10am ~ 6pm</p>
                    <p>Opening 11. 01 6pm</p>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Main;
