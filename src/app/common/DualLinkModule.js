import { Link } from "react-router-dom";
import "../../css/DualLink.css"
export default function DualLinkModule({ title, link, mode }) {
    return (
        <Link to={`/${link}/${mode}`} >
            <div className='linkModule'>
                <p>{title}</p>
            </div>
        </Link>
    )
}