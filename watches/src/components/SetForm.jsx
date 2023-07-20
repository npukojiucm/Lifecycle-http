import FormGroup from "./FormGroup.jsx";

export default function SetForm({ handlerSubmit }) {
    return (
    <form action="#" className="form" onSubmit={handlerSubmit}>
        <div className="group-container">
            <FormGroup
                spanText={"Название"}
                inputName={"title"}
            />

            <FormGroup
                spanText={"Временная зона"}
                inputName={"zone"}
            />

            <button className="btn-add">Добавить</button>
        </div>
    </form>
    )
}
