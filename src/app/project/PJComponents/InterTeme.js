import InterStep from "./InterStep";
import SubHeading from "../../common/SubHeading";
import "../../../css/PJDetail.css";
export default function InterTheme({ title, desc, format, step }) {
    return (
        <section className='itemContainer column'>
            <SubHeading title={"인터랙티브 아트"} />
            <div className='interContainer row'>
                <div className='interInfo colounm'>
                    <h2 className='title'>{title}</h2>
                    <p className="description">{desc}</p>
                    <p>{format}</p>
                </div>
                <div className='interImg' >
                    <img src="#" alt="#" />
                </div>
            </div>
            <div className='interStep  row'>
                {step.map((item) => (
                    <InterStep imgUrl="#" step={item} />
                ))}
            </div>
            <div className='interVideo'>
                hi
            </div>

        </section>
    )
}