interface InterestsProps {
    interests?: string[],
}

function InterestsContent({interests} :InterestsProps) {
    if (!interests) return null

    return <ul>
        {interests.map(interes => <li>{interes}</li>)}
    </ul>
}

export default InterestsContent;