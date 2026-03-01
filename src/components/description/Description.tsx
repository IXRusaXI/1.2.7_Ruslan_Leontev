import defaultUserPhoto from '../../assets/photo-default.svg'

interface DescriptionProps {
    photoUrl?: string | null,
    name: string,
    description: string
}

function Description({photoUrl, name, description} :DescriptionProps) {
    return <div className="description">
        <img className="photo--default" src={photoUrl ? photoUrl : defaultUserPhoto} />
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
}

export default Description;