import DualLinkModule from "./DualLinkModule";
import "../../css/DualLink.css";

function DualLink({ link, indiv, team }) {
  return (
    <div className="column">
      <DualLinkModule title={indiv} link={link} mode="indiv" />
      <hr className="horizontalLine " />
      <DualLinkModule title={team} link={link} mode="team" />
    </div>
  );
}
export default DualLink;
