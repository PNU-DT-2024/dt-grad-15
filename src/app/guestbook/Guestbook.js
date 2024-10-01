import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Masonry from 'react-masonry-css';
import Menu from "../common/Menu";
import Footer from "../common/Footer";
import guestBookService from "../../api/guestBookService";
import Title from "../common/Title";
import MessageTxt from "./MessageTxt";
import styles from "../../css/Guestbook.module.css"

function Guestbook() {
  const [guestBookEntries, setGuestBookEntries] = useState([]);
  const [from, setFrom] = useState("");
  const [comment, setComment] = useState("");
  const [to, setTo] = useState("");
  const [filter, setFilter] = useState(""); // 필터 상태 추가

  const names = [
    "모두에게",
    "김경린",
    "김동성",
    "김은선",
    "박서해",
    "박승찬",
    "박정혜",
    "오여슬",
    "왕신웨",
    "이민서",
    "이상화",
    "이지은",
    "조성원",
    "최시아",
  ];

  useEffect(() => {
    loadGuestBookEntries();
  }, []);

  const loadGuestBookEntries = async () => {
    try {
      let fetchedEntries = await guestBookService.getGuestBook();
      // fetchedEntries가 배열이 아니라 객체인 경우도 Object.values를 사용하여 배열로 변환
      fetchedEntries = Array.isArray(fetchedEntries)
        ? fetchedEntries
        : Object.values(fetchedEntries);
      // 시간순 정렬: 최신 항목이 먼저 오도록 정렬
      const sortedEntries = fetchedEntries.sort(
        (a, b) => new Date(b.createdTime) - new Date(a.createdTime)
      );
      setGuestBookEntries(sortedEntries);
    } catch (error) {
      console.error("Error loading guestbook entries:", error);
      setGuestBookEntries([]);
    }
  };

  const filteredGuestBookEntries = filter
    ? guestBookEntries.filter((entry) => entry.to === filter)
    : guestBookEntries;

  const handlePostGuestBook = async () => {
    try {
      await guestBookService.postGuestBook(from, comment, to);
      setFrom("");
      setComment("");
      setTo("");
      loadGuestBookEntries();
    } catch (error) {
      console.error("Error posting to guestbook:", error);
    }
  };
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };
  const renderGuestBookEntries = () => {
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={styles.myMasonryGrid}
        columnClassName={styles.myMasonryGridColumn}
      >
        {filteredGuestBookEntries.map((entry) => (
          <div key={entry.id} className={`${styles.messageBox} column`}>
            <span>To. {entry.to}</span>
            <p className="description">{entry.comment}</p>
            <p>From. {entry.from}</p>
            {/* <p>Created Time: {entry.createdTime}</p> */}
          </div>
        ))}
      </Masonry>
    );
  };

  const isMobile = useMediaQuery({
    query:"(max-width:767px)"
  });

  return (
    <div>
      <Menu />
      <main className="contentsContainer">
        <Title title="방명록" />
        <div>
          < MessageTxt />

        </div>
        <section className={`${styles.messageWrapper} ${isMobile?'column':'row'}`}>
          <div className={`${isMobile?styles.m_sentContainer:styles.sentContainer} column`}>
            <div className={`${styles.personalInfo} column`}>
              <label>To:</label>
              <select value={to} onChange={(e) => setTo(e.target.value)}>
                {names.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div className={`${styles.personalInfo} column`}>
              <label>From:</label>
              <input
                type="text"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
          </div>
          <div className={`${styles.textContainer} column`}>
            <div className={styles.comment}>
              <textarea className={styles.textarea} rows="10"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div className={styles.btnContainer}>
              <button onClick={handlePostGuestBook}>보내기</button>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.optionContainer}>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              {names.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.messageList}>
            {renderGuestBookEntries()}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Guestbook;
