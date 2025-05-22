export default function Button({buttonName, handleClickProp}) {
    return (
        
            <button onClick={() => handleClickProp(buttonName)}>{buttonName}</button>
        
    )
}