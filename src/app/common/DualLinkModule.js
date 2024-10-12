import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../../css/DualLink.css"
export default function DualLinkModule({ title, link, mode }) {
    const isTablet = useMediaQuery({
        query: "(max-width:1080px)"
    });
    
    return (
        <Link to={`/${link}/${mode}`} >
            <div className={isTablet?'t_linkModule':'linkModule'}>
                <p>{title}</p>
            </div>
        </Link>
    )
}