import styles from "../../css/Title.module.css";

function Title({ title }) {
    return (
        <div className={`${styles.container} row`}>
            <h1>{title}</h1>
            <hr />
        </div>

    )
}
export default Title;