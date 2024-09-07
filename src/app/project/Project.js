import Menu from "../common/Menu";
import { Link } from "react-router-dom";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";

function Project() {
    return (
        <div>
            <Menu />
            <main className="contentsContainer">
                <section>
                    <Title title="프로젝트" />
                    <DualLink link="project" indiv="개인프로젝트" team="팀프로젝트" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Project;