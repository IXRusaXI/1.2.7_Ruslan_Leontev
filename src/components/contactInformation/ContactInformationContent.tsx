import './ContactInformationContent.css'

interface ContactInformationProps {
    email: string,
    phone?: string
}

function ContactInformationContent({email, phone}:ContactInformationProps) {
    return <div>
        <span>Email: {email}</span>
        <span>Телефон: {phone}</span>
    </div>
}

export default ContactInformationContent;