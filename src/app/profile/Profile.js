import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";


function Profile() {
    const isMobile = useMediaQuery({
        query:"(max-width:767px)"
      });
    return (
        <div>
            <Menu page='profile'/>
            <main className="contentsContainer">
                <section>
                {isMobile?<></>:<Title title="profile" />}
                    <DualLink link="profile" indiv="INDIVIDUAL" team="TEAM" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Profile;