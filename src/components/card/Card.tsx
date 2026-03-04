interface CardProps {
    header: string,
    className?: string,
    children :React.ReactNode
}

function Card({header, className, children} :CardProps) {
    return <div className={className ? "card " + className : "card"}>
        <div className="card-header">{header}</div>
        <div className="card-content">{children}</div>
    </div>
}

export default Card;