import { useState, useEffect } from "react";
import $ from 'jquery';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.js';
import { useMediaQuery } from "react-responsive";


import Menu from "../common/Menu";
import Banner from "./Banner";
import InterBanner from "./InterBanner";
import SubHeading from "../common/SubHeading";
import Footer from "../common/Footer";
import styles from "../../css/Main.module.css";
import KakaoMap from "../../kakaoMap";
import { motion } from "framer-motion";

export default function Main() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)"
  });

  const [inter, setInter] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  function startInter() {
    setInter(!inter);
  }
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false },
    transition: { ease: "easeInOut", duration: 0.8 },
  };

  useEffect(() => {
    if (!isInitialized) {
      $('#fullpage').fullpage({
        // autoScrolling: true,
        // scrollHorizontally: true,
        scrollOverflow: true,
        navigation: true,
        navigationTooltips: ['1', '2', '3', '4', '5', '6', '7', '8'],
        scrollingSpeed: 1000,
      });
      setIsInitialized(true); // 초기화 상태를 true로 설정
    }

    return () => {
      if (isInitialized) {
        $.fn.fullpage.destroy('all');
        setIsInitialized(false); // 상태 리셋
      }
    };
  }, [isInitialized]);

  return (
    <div >
      <main className={styles.snappingContainer}>
        <div id='fullpage'>
          <section className={`section`}>
            <div className={styles.hScreen}>
              <div className={styles.nav}>
                <Menu page="버릇" />
              </div>
              {inter == false ? (
                <InterBanner onBtnClick={startInter} />
              ) : (
                <Banner onBtnClick={startInter} />
              )}
            </div>
          </section>
          <section className='section'>
            <div className={styles.hScreen}>
              <div className={styles.subTitle}>
                <SubHeading title={"전시 개요"} />
              </div>
              <motion.div {...motionProps}>
                <article className="articleContainer column">
                  <div className={`${styles.captionContainer} ${styles.outline} column`}>
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
                        이해하는 태도를 기르는 기회가 될 것이다.
                      </p>
                    </div>
                    <p className={styles.endnotes}>
                      부산대학교 Design & Technology 15회 졸업 전시
                    </p>
                  </div>
                </article>
              </motion.div>
            </div>
          </section>

          <section className={`section`}>
            <div className={styles.hScreen}>

              <div className={styles.subTitle}>
                <SubHeading title={"전시 아이덴티티"} />
              </div>
              <motion.div {...motionProps}>
                <article className={`articleContainer ${isMobile ? 'column' : 'row'}`}>


                  <div className={`${styles.captionContainer} column`}>
                    <h1 className={styles.title}>스캐니메이션</h1>
                    <div className={`${styles.txtContainer} description`}>
                      <p>
                        스캐니메이션은 일정한 간격으로 줄무늬가 적용된 판인 슬릿 마스크를 통해 정적인 이미지를 움직이는 것처럼 보이게하는 시각 기법입니다.
                        슬릿 마스크를 통과하며 행동이 반복되는 방식은 이번 전시의 주요 주제인 버릇을 효과적으로 보여줍니다.
                        이러한 스캐니메이션을 아이덴티티의 모티브로 선정하여 개인의 버릇을 인식하고 그 의미를 탐구하는 전시주제를 시각적으로 표현하고자 하였습니다.
                      </p>

                    </div>
                  </div>
                </article>
              </motion.div>
            </div>
          </section>
          <section className={`section`}>
            <div className={styles.hScreen}>

              <div className={styles.subTitle}>
                <SubHeading title={"전시 아이덴티티"} />
              </div>
              <motion.div {...motionProps}>
                <article className={`articleContainer ${isMobile ? 'column' : 'row'}`}>

                  <div className={`${styles.captionContainer} column`}>
                    <h1 className={styles.title}>스캐니메이션</h1>
                    <div className={`${styles.txtContainer} description`}>
                      <p>
                        슬릿 마스크는 우리가 버릇을 인식하려고 노력하는 과정을 상징합니다.
                        정적인 이미지는 그 모습을 온전히 인지하기 어려운 형태이지만, 슬릿 마스크를 통해 반복적인 행동이 선명하게 보이면서 그 본질을 이해할 수 있게 됩니다.
                        이는 우리의 버릇을 직시하고 깨닫는 과정과 맞닿아 있으며, 전시의 주제를 관통하는 중요한 모티브로 작용합니다.
                      </p>
                      <p>
                        이번 전시에서는 가상의 인물 이미지를 만들어내고 간단한 동작을 부여하고 이를 네 개의 프레임으로 나눈 후 스캐니메이션 기법을 적용하여 반복적인 움직임을 시각화했습니다.
                        이때 생성된 가상의 인물은 특정 인물을 표방하지 않으며 이를 통해 이번 전시가 단지 참여한 학생들만의 이야기가 아닌, 누구에게나 적용될 수 있는 보편적인 주제를 다루고 있음을 나타내고자 했습니다.
                      </p>
                    </div>
                  </div>
                </article>
              </motion.div>
            </div>
          </section>
          <section className={`section`}>
            <div className={styles.hScreen}>

              <div className={styles.subTitle}>
                <SubHeading title={"전시 포스터"} />
              </div>
              <motion.div {...motionProps}>

                <div className={`${styles.imgPoster} ${styles.imgContainer}`}>
                  <img src="/img/mainPoster.jpg" alt="#" />
                  {/* <p>바꾸기</p> */}
                </div>
              </motion.div>
            </div>
          </section>

          <section className={`section`}>
            <div className={styles.hScreen}>
              <iframe src={`https://www.youtube.com/embed/oTEYBxPvTso`} className={styles.opening} />
            </div>
          </section>

          <section className={`section`}>
            <div className={styles.hScreen}>
              <div className={styles.subTitle}>
                <SubHeading title={"전시 인원"} />
              </div>
              <motion.div {...motionProps}>
                <article className={`articleContainer  ${isMobile ? `column ${styles.m_memberContainer}` : `row ${styles.memberContainer}`}`}>
                  <div className={styles.imgMember}>
                    <img src="/img/profileImg/all_profile.jpg" alt="#" />
                  </div>
                  <div className={`${styles.txtContainer} ${styles.memberTxt} description`}>
                    <p>이상화 · 박서해 · 왕신웨 · 이지은 · 김경린 · 김은선</p>
                    <p>
                      박정혜 · 최시아 · 김동성 · 박승찬 · 오여슬 · 이민서 · 조성원{" "}
                    </p>
                  </div>
                </article>
              </motion.div>
            </div>
          </section>

          <section className={`section`}>
            <div className={styles.hScreen}>
              <div className={styles.subTitle}>
                <SubHeading title={"위치 및 시간"} />
              </div>
              <motion.div {...motionProps}>
                <article className={`contentsContainer ${isMobile ? 'column' : 'row'}`}>
                  <div className={`${isMobile ? styles.m_imgMap : styles.imgMap} ${styles.imgContainer}`}>
                    <KakaoMap />
                  </div>
                  <div className={`${styles.captionContainer} cloumn`}>
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
