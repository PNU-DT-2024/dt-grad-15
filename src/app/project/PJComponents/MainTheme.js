import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../../../components/store";
import "../../../css/PJDetail.css";
export default function MainTheme({ title, desc, name, email, member }) {
    let dispatch = useDispatch();
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return (
        <section className="mainConcept box column">
            <div className="column">
                <div className={isMobile ? 'column m_concept' : 'row concept'}>
                    <h1>{title}</h1>
                    <span className="description">{desc}</span>
                </div>
                <div className="row author">
                    {member != null ?
                        <Link to={`/profile/team`} className='column'>
                            <div  onClick={()=> dispatch(changeName(name))}>
                                <p>{name}</p>
                                <div className="row">
                                    {member.map((item, index) => (
                                        <span key={index}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </Link> : <Link to={`/profile/indiv/${name}`} className='column'>
                            <div>
                                <p>{name}</p>
                                <p>{email}</p>
                            </div>
                        </Link>}
                </div>
            </div>
        </section>
    )
}