import Menu from "../Menu";
import { useParams } from "react-router-dom";
function TeamPJ(){
    let {id} = useParams();
    return(
        <div>
            <p>{id}의 팀 프로젝트 입니다.</p>
            <Menu/>
        </div>
    )
}
export default TeamPJ;