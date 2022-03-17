import classes from "./Card.module.css"

export default function Card(props) {
    const allClass = `${classes.card} ${props.className}`
    return (
        <>
            <div className={allClass}>
                {props.children}
            </div>
        </>
    ); 
}