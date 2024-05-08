import "./Card.css";

function Card({ card: {desc, type, value, symbol}}) {
    let color = "red"
    if(type === "spade" || type === "clubs") {
        color = "black";
    }
    return (
        <div className="card">
            <h2 style={{ color }}>{value}</h2>
            <p style={{color}}>{symbol}</p>

        </div>
    )
}

export default Card;