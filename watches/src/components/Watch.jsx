import DeleteButton from "./DeleteButton.jsx";

export default function Watch({ watchTitle, watchZone, handlerDeleteWatch }) {
    const formatter = new Intl.DateTimeFormat("ru", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    return (
        <div className="watch" data-title={watchTitle}>
            <span className="watch-title">{watchTitle}</span>
            <div className="watch-time">{formatter.format(watchZone)}</div>

            <DeleteButton handlerDeleteWatch={handlerDeleteWatch}/>
        </div>
    )
}
