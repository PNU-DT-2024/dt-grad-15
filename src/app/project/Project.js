import { useMediaQuery } from "react-responsive";

import Menu from "../common/Menu";
import Title from "../common/Title";
import DualLink from "../common/DualLink";
import Footer from "../common/Footer";

function Project() {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div>
            <Menu page='PROJECT'/>
            <main className="contentsContainer">
                <section>
                    {isMobile?<></>:<Title title="PROJECT" />}
                    <DualLink link="project" indiv="INDIVIDUAL" team="TEAM" />
                </section>
            </main>
            <Footer />
        </div>
    )
}
export default Project;