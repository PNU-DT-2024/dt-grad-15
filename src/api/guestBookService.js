// firebase의 필수 기능과 firebase의 데이터 베이스와 데이터 베이스 경로 참조를 들고온다.
import { child, get, push, ref } from "firebase/database";
import { db, dbRef } from "../firebase";

const guestBookService = {
  //guestBook 은 방명록 데이터가 저장되는 루트 경로입니다.
  //guestBook 경로에서 데이터를 가져온다. (읽기)
  getGuestBook: async () => {
    const res = await get(child(dbRef, "guestBook"));
    try {
      return res.val();
    } catch (err) {
      throw err;
    }
  },
  // 새로운 방명록을 추가한다. (쓰기)
  // guestBook/entries 는 방명록 항목이 저장되는 하위 경로입니다.
  postGuestBook: async (from, comment, to) => {
    const inputData = {
      from,
      comment,
      to,
      createdTime: new Date().toISOString(),
    };
    const res = await push(ref(db, "guestBook/entries"), inputData);
    return res;
  },
};

export default guestBookService;
