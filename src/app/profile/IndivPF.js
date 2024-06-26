import Menu from "../Menu";
import { useParams } from "react-router-dom";
function IndivPF(){
    let {id} = useParams();
    return(
        <div>
            <p>{id}의 개인 프로필 입니다.</p>
            <Menu/>
        </div>
    )
}
export default IndivPF;