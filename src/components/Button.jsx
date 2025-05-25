export default function Button({buttonName, handleClickProp, className}) {
    return (
        
            <button className={className} onClick={() => handleClickProp(buttonName)}>{buttonName}</button>
        
    )
}