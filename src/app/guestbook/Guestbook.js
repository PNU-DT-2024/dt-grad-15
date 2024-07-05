import Menu from "../Menu";
import guestBookService from "../../api/guestBookService";

// 코드 분석 전입니다.
function Guestbook() {
  const [guestBookEntries, setGuestBookEntries] = useState([]);
  const [from, setFrom] = useState("");
  const [comment, setComment] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    loadGuestBookEntries();
  }, []);

  const loadGuestBookEntries = async () => {
    try {
      const entries = await guestBookService.getGuestBook();
      setGuestBookEntries(entries || []);
    } catch (error) {
      console.error("Error loading guestbook entries:", error);
    }
  };

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
    return guestBookEntries.map((entry) => (
      <div key={entry.id}>
        <p>From: {entry.from}</p>
        <p>Comment: {entry.comment}</p>
        <p>To: {entry.to}</p>
        <p>Created Time: {entry.createdTime}</p>
        {/* Add edit and delete buttons here */}
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
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <button onClick={handlePostGuestBook}>Post to Guestbook</button>

      <div>
        <h2>Guestbook Entries</h2>
        {renderGuestBookEntries()}
      </div>
    </div>
  );

  return (
    <div>
      <p>guestbook</p>
      <Menu />
    </div>
  );
}
export default Guestbook;
