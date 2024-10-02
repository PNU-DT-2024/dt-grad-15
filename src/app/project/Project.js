import { useMediaQuery } from "react-responsive";
import Menu from "../common/Menu";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";

function Project() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <Menu page='작품'/>
            <main className="contentsContainer">
                <section>
                    {isMobile?<></>:<Title title="작품" />}
                    <DualLink link="project" indiv="개인작품" team="팀작품" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Project;