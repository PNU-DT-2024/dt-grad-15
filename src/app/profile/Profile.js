import Menu from "../Menu";
import {Link} from "react-router-dom";
import indivData from "../../components/indivPF.json";
import teamData from "../../components/teamPF.json";

function Profile() {
    return (
        <div>
            <p>profile</p>
            <Menu />
            <div>
                <h1>팀</h1>
                {teamData.teamPF.map((indiv)=> (
                    <Link to={`/team-profile/${indiv.name}`}>
                        <p>{indiv.name}</p>
                    </Link>
                ))}
            </div>
            <div>
                <h1>개인</h1>
                {indivData.indivPF.map((indiv)=> (
                    <Link to={`/indiv-profile/${indiv.name}`}>
                        <p>{indiv.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Profile;