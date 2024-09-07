import Menu from "../common/Menu";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";


function Profile() {
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <section>
                    <Title title="프로필" />
                    <DualLink link="profile" indiv="개인프로필" team="팀프로필" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Profile;