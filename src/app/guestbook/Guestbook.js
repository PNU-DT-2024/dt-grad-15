import React, { useState, useEffect } from "react";
import Menu from "../Menu";
import guestBookService from "../../api/guestBookService";

function Guestbook() {
  const [guestBookEntries, setGuestBookEntries] = useState([]);
  const [from, setFrom] = useState("");
  const [comment, setComment] = useState("");
  const [to, setTo] = useState("");
  const [filter, setFilter] = useState(""); // 필터 상태 추가

  const names = [
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

  const renderGuestBookEntries = () => {
    return filteredGuestBookEntries.map((entry) => (
      <div key={entry.id}>
        <p>From: {entry.from}</p>
        <p>Comment: {entry.comment}</p>
        <p>To: {entry.to}</p>
        <p>Created Time: {entry.createdTime}</p>
      </div>
    ));
  };

  return (
    <div>
      <Menu />
      <h1>Guestbook</h1>
      <div>
        <label>From:</label>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div>
        <label>Comment:</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <label>To:</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handlePostGuestBook}>Post to Guestbook</button>
      <div>
        <div>
          <h2>Filter by Recipient</h2>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <h2>Guestbook Entries</h2>
        {renderGuestBookEntries()}
      </div>
    </div>
  );
}

export default Guestbook;
