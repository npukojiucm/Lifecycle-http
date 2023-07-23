export default function Button({ clasName, handlerOnClick }) {
    return (
        <button
            className={clasName}
            type="button"
            onClick={handlerOnClick}
        >
        </button>
    )
}
