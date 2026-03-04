interface InterestsProps {
    interests?: string[],
}

function InterestsContent({interests} :InterestsProps) {
    if (!interests) return null

    return <ul key={"interests"}>
        {interests.map(interes => <li>{interes}</li>)}
    </ul>
}

export default InterestsContent;