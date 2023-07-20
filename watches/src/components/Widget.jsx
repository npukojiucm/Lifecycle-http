import {useEffect, useState} from "react";
import SetForm from "./SetForm.jsx";
import Watches from "./Watches.jsx";

export default function Widget() {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        const timer = setInterval(() => {
            setWatches([
                ...watches.map(w => {
                    return {
                        title: w.title,
                        watchZone: w.watchZone + 1000,
                    }
                })
            ])
        }, 1000)

        return () => clearInterval(timer);
    }, [watches])

    const handlerSubmitForm = (e) => {
        e.preventDefault();

        const data = new FormData(e.target),
            title = data.get('title'),
            zone = data.get('zone');

        const inputTitle = e.target[0];
        const inputZone = e.target[1];

        inputTitle.value = '';
        inputZone.value = '';

        const date = Date.now();
        const watchZone = date + (zone * 3600 * 1000);

        const index = watches.findIndex(watch => watch.title === title);

        return (index < 0) ? setWatches([...watches, {title, zone, watchZone}]) : null;
    }

    const handlerDeleteWatch = (e) => {
        const watch = e.target.closest('.watch');
        const { title } = watch.dataset;

        return setWatches([
            ...watches.filter(watch => watch.title !== title)
        ])
    }

    return (
        <div className="page">
            <SetForm handlerSubmit={handlerSubmitForm}/>

            <Watches
                watches={watches}
                handlerDeleteWatch={handlerDeleteWatch}
            />
        </div>
    )
}
