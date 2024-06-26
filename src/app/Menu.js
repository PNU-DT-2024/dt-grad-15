import {Link} from "react-router-dom";
function Menu(){
    return(
        <div>
        <h1>메뉴</h1>
        <Link to={'/'}>
            <p>메인</p>
        </Link>
        <Link to={'/profile'}>
            <p>프로필</p>
        </Link>
        <Link to={'/project'}>
            <p>프로젝트</p>
        </Link>
        <Link to={'/guestbook'}>
            <p>방명록</p>
        </Link>
        </div>
    )
}
export default Menu;