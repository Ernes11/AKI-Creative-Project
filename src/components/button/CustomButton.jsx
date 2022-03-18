import "../../sass/customButton.scss"


export default function CustomButton ({type ='contained', children, onClick, className}) {

    return (
        <button className={`customButton customButton${type} ${className}`} onClick={onClick}>{children}</button>
    )
}