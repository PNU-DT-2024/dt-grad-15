import SubHeading from "../../common/SubHeading";
import "../../../css/PJDetail.css";
export default function MainTheme({ title, desc }) {
    return (
        <section>
            <SubHeading title={"메인 주제"} />
            <div className='mainContainer row'>
                <h1>{title}</h1>
                <span className="description">{desc}</span>
            </div>
        </section>
    )
}