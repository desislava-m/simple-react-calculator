export default function Screen( {inputProp, resultProp} ) {
    return (
        <div className="screen">
            <input type="text" readOnly value={inputProp} placeholder="0" />
            <input type="text" readOnly value={resultProp} placeholder="Result" />
        </div>
    )
}