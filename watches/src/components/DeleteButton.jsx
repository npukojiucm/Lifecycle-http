export default function DeleteButton({ handlerDeleteWatch }) {
    return (
        <div className="delete-btn" onClick={handlerDeleteWatch}>
            <img src="../../public/delete_ico.png" alt="delete"/>
        </div>
    )
}
