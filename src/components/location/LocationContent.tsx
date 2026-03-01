import './LocationContent.css'

interface LocationProps {
    country?: string,
    city?: string,
    adress?: string
}

function LocationContent({country, city, adress} :LocationProps) {
    return <div className='location'>
        <span>Страна: {country}</span>
        <span>Город: {city ? city : 'Не указан'}</span>
        <span>Адрес: {adress ? adress : 'Не указан'}</span>
    </div>
}

export default LocationContent;