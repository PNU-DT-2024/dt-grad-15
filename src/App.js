import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrolltoTop";
import GlobalStyles from "./css/GlobalStyles";
import Main from "./app/home/Main";
import Profile from "./app/profile/Profile";
import Guestbook from "./app/guestbook/Guestbook";
import Project from "./app/project/Project";
import About from "./app/about/About";
import Teams from "./app/common/Teams";
import IndivPFDetail from "./app/profile/IndivPFDetail";
import TeamPJDetail from "./app/project/TeamPJDetail";
import IndivPJDetail from "./app/project/IndivPJDetail";
import IndivPF from "./app/profile/IndivPF";
import IndivPJ from "./app/project/IndivPJ";
import TeamPJ from "./app/project/TeamPJ";
import TeamPF from "./app/profile/TeamPF";
//작가 - 브랜딩, dp, 영상, 웹, 개인
//작품 - 브랜딩, dp, 영상, 웹, 개인
//방명록

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/guestbook" element={<Guestbook />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/indiv" element={<IndivPF />}></Route>
          <Route path="/profile/indiv/:id" element={<IndivPFDetail />}></Route>,
          <Route path="/profile/team" element={<Teams type='profile' />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/indiv" element={<IndivPJ />}></Route>
          <Route path="/project/indiv/:id" element={<IndivPJDetail />}></Route>
          <Route path="/project/team" element={<Teams type='project' />}></Route>
          <Route path="/project/team/:id" element={<TeamPJDetail />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/team-profile/:id" element={<TeamPF />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
