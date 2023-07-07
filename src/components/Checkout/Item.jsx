export default function Item( props ) {
    return (
        <div className="item">
            <div className="image">
                <img src={ props.image } alt="" />
            </div>
            <div className="description">
                <div className="title">{ props.name }</div>
                <div className="chip">{ props.chip }</div>
            </div>
            <div className="price">${ props.price }</div>
            <div>
                <button onClick={ props.removeFromCart }>X</button>
            </div>
        </div>
    )
}