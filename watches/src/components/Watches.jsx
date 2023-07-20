import Watch from "./Watch.jsx";

export default function Watches({ watches, handlerDeleteWatch }) {
    return (
        <div className="watches">
            {watches.map(watch => {
                    return <Watch
                        key={watch.title}
                        watchTitle={watch.title}
                        watchZone={watch.watchZone}
                        handlerDeleteWatch={handlerDeleteWatch}
                    />
                })
            }
        </div>
    )
}
