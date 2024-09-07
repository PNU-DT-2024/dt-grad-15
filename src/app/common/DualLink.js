import "../../css/DualLink.css"
import DualLinkModule from "./DualLinkModule";

function DualLink({ link, indiv, team }) {
    return (

        <div className='linkContainer'>
            <DualLinkModule title={indiv} link={link} mode="indiv"/>
            <hr className='horizontalLine' />
            <DualLinkModule title={team} link={link} mode="team"/>
        </div>

    )
}
export default DualLink;