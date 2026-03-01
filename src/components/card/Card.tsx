interface CardProps {
    header: string,
    className?: string,
    content?: React.ReactNode
}

function Card({header, content, className}: CardProps) {
    return <div className={className ? "card " + className : "card"}>
        <div className="card-header">{header}</div>
        <div className="card-content">{content}</div>
    </div>
}

export default Card  ;