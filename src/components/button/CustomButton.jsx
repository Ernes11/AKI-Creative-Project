import "../../sass/customButton.scss"


export default function CustomButton ({type ='contained', children, onClick}) {

    return (
        <button className={`customButton customButton${type}`} onClick={onClick}>{children}</button>
    )
}