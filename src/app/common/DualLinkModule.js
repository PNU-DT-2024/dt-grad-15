import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import {useDispatch } from "react-redux";
import { changeName } from "../../components/store";
import "../../css/DualLink.css"
export default function DualLinkModule({ title, link, mode }) {
    let dispatch = useDispatch();
    const isTablet = useMediaQuery({
        query: "(max-width:1080px)"
    });
    
    return (
        <Link to={`/${link}/${mode}`} onClick={()=> dispatch(changeName('WEB'))}>
            <div className={isTablet?'t_linkModule':'linkModule'}>
                <p>{title}</p>
            </div>
        </Link>
    )
}