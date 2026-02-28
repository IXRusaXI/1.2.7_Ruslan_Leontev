interface CardProps {
    header: string,
    content?: React.ReactNode
}

function Card({header, content}: CardProps) {
    return <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-content">{content}</div>
    </div>
}

export default Card  ;