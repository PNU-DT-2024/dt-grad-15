import Menu from "../Menu";
import {Link} from "react-router-dom";
import indivData from "../../components/indivPJ.json";
import teamData from "../../components/teamPJ.json";
function Project(){
    return (
        <div>
            <p>project</p>
            <Menu />
            <div>
                <h1>팀</h1>
                {teamData.teamPJ.map((indiv)=> (
                    <Link to={`/team-project/${indiv.name}`}>
                        <p>{indiv.name}</p>
                    </Link>
                ))}
            </div>
            <div>
                <h1>개인</h1>
                {indivData.indivPJ.map((indiv)=> (
                    <Link to={`/indiv-project/${indiv.name}`}>
                        <p>{indiv.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Project;