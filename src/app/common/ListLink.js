import { Link } from "react-router-dom"
import styles from "../../css/ListLink.module.css"
export default function ListLink({ prevName, nextName, prevURL, nextURL, listURL }) {
    return (
        <div className={`${styles.ListLinkContainer} row`}>
            <Link to={prevURL} className={styles.ListLink}>
                <div>&lt;------------</div>
                <p>{prevName}</p>
            </Link>
            <Link to={listURL} className={styles.ListLink}>
                <div>목록</div>
            </Link>
            <Link to={nextURL} className={styles.ListLink}>
                <div>------------&gt;</div>
                <p>{nextName}</p>
            </Link>

        </div>
    )
}
export function setPrev(type, data) {
    const prev = data.index === 0 ? type.team[2] : type.team[data.index - 1];
}
export function setnext(type, data) {
    const next = data.index === 2 ? type.team[1] : type.team[data.index + 1];

}