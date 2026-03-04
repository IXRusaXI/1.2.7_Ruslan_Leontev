import './ContactInformationContent.css'

interface ContactInformationProps {
    email: string,
    phone?: string
}

function ContactInformationContent({email, phone}:ContactInformationProps) {
    console.log('Чище будет', { email, phone })

    return <div className='contact-information'>
        <span>Email: {email}</span>
        <span>Телефон: {phone ? phone : 'Не указан'}</span>
    </div>
}

export default ContactInformationContent;