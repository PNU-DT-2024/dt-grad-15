import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";


function Profile() {
    const isMobile = useMediaQuery({
        query:"(max-width:767px)"
      });
    return (
        <div>
            <Menu page='작가'/>
            <main className="contentsContainer">
                <section>
                {isMobile?<></>:<Title title="작가" />}
                    <DualLink link="profile" indiv="개인" team="팀" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Profile;