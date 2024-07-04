import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./app/Main";
import Profile from "./app/profile/Profile";
import Guestbook from "./app/guestbook/Guestbook";
import Project from "./app/project/Project";
import IndivPF from "./app/profile/IndivPF";
import TeamPF from "./app/profile/TeamPF";
import TeamPJ from "./app/project/TeamPJ";
import IndivPJ from "./app/project/IndivPJ";
//프로필 - 브랜딩, dp, 영상, 웹, 개인
//프로젝트 - 브랜딩, dp, 영상, 웹, 개인
//방명록

function App() {
  return (
    // <p>hi</p>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/guestbook" element={<Guestbook />}></Route>
        <Route path="/indiv-profile/:id" element={<IndivPF />}></Route>
        <Route path="/indiv-project/:id" element={<IndivPJ />}></Route>
        <Route path="/team-profile/:id" element={<TeamPF />}></Route>
        <Route path="/team-project/:id" element={<TeamPJ />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
