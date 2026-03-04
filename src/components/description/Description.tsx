import defaultUserPhoto from '../../assets/photo-default.svg'
import "./Description.css"

interface DescriptionProps {
    photoUrl?: string | null,
    name: string,
    description: string
}

function getImageClass(photoUrl :string | null | undefined) {
    return photoUrl ? "photo--custom" : "photo--default"
}

function getImageSrc(photoUrl :string | null | undefined) {
    return photoUrl ? photoUrl : defaultUserPhoto
}

function Description({photoUrl, name, description} :DescriptionProps) {
    return <div className="description">
        <img 
            className={getImageClass(photoUrl)} 
            src={getImageSrc(photoUrl)} 
        />
        <h4>{name}</h4>
        <p>{description}</p>
    </div>
}

export default Description;