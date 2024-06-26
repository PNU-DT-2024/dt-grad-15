import Menu from "../Menu";
import { useParams } from "react-router-dom";
function TeamPF(){
    let {id} = useParams();
    return(
        <div>
            <p>{id}의 팀 프로필 입니다.</p>
            <Menu/>
        </div>
    )
}
export default TeamPF;