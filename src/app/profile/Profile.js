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
                    <Title title="작가" />
                    <DualLink link="profile" indiv="개인작가" team="팀작가" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Profile;