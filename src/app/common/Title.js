import { useMediaQuery } from "react-responsive";
import styles from "../../css/Title.module.css";

function Title({ title }) {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <div className={`${isMobile?styles.m_loc:styles.loc} row`}>
            <h1>{title}</h1>
            <hr />
        </div>

    )
}
export default Title;