import { child, get, push, ref, set } from "firebase/database";
import { db } from "../firebase";

const guestBookService = {
  getGuestBook: async () => {
    const guestBookRef = ref(db, "guestBook");
    try {
      const snapshot = await get(child(guestBookRef, "entries"));
      const entries = [];
      snapshot.forEach((childSnapshot) => {
        entries.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      return entries;
    } catch (error) {
      console.error("Error fetching guestbook entries:", error);
      throw error;
    }
  },
  postGuestBook: async (from, comment, to) => {
    const newEntryRef = push(ref(db, "guestBook/entries"));
    const inputData = {
      from,
      comment,
      to,
      createdTime: new Date().toISOString(),
    };
    try {
      await set(newEntryRef, inputData);
      return newEntryRef.key;
    } catch (error) {
      console.error("Error posting guestbook entry:", error);
      throw error;
    }
  },
};

export default guestBookService;
