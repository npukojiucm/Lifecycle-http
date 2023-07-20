export default function FormGroup({ spanText, inputName }) {
    return (
        <div className="group">
            <span>{spanText}</span>
            <input type="text" name={inputName}/>
        </div>
    )
}
