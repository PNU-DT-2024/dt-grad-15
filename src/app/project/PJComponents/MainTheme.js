import { useMediaQuery } from "react-responsive";
import SubHeading from "../../common/SubHeading";
import "../../../css/PJDetail.css";
export default function MainTheme({ title, desc }) {
    const isMobile = useMediaQuery({
        query:"(max-width:767px)"
    });
    return (
        <section>
            <SubHeading title={"메인 주제"} />
            <div className= {isMobile? 'column m_mainContainer': 'row mainContainer'}>
                <h1>{title}</h1>
                <span className="description">{desc}</span>
            </div>
        </section>
    )
}