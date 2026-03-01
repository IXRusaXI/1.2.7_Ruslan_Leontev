import reactPhoto from '../../assets/react.svg'

interface UserProfile {
  userName: string,
  protoUrl?: string | null,
  userDescription: string,
  openForWork?: boolean,
  contactInfo: {
    email: string,
    phone?: string
  },
  location?: {
    city: string,
    country: string,
    address?: string
  },
  interests?: string[]
}

const userProfile: UserProfile = {
    userName: 'Дэн', // обязательное свойство
    // protoUrl: null, // необязательное свойство
    protoUrl: reactPhoto, // необязательное свойство
    userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
    openForWork: true, // необязательное свойство
    contactInfo: {
      // обязательное свойство
      email: 'abramov@example.com', // обязательное свойство
      phone: '+1234567890', // необязательное свойство
    },
    location: {
      // необязательное свойство
      city: 'Москва', // обязательное свойство
      country: 'Россия', // обязательное свойство
      address: 'Большая полянка 44', // необязательное свойство
    },
    interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
  };

export default userProfile;