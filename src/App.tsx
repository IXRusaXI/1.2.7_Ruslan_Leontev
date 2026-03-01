import './App.css';
import Card from './components/card/Card';
import ContactInformationContent from './components/contactInformation/ContactInformationContent';
import userProfile from './components/user/userProfile'
import LocationContent from './components/location/LocationContent';
import InterestsContent from './components/interests/interestsContent';
import Description from './components/description/Description';

function App() {
  return (
    <>
      <Description
          photoUrl={userProfile.protoUrl}
          name={userProfile.userName}
          description={userProfile.userDescription}
          />
      <div className="main">
        <Card key={'contactInformationCard'}
            header={'Контактная информация'} 
            content={<ContactInformationContent 
                        email={userProfile.contactInfo.email} 
                        phone={userProfile.contactInfo.phone}
                    />} 
        />
        <Card key={'locationCard'} className={!userProfile.location ? 'hidden' : undefined}
            header={'Местоположение'} 
            content={<LocationContent 
                        country={userProfile.location?.country} 
                        city={userProfile.location?.city}
                        adress={userProfile.location?.address}
                        
                    />} 
        />
        <Card key={'interestsCard'} className={!userProfile.interests ? 'hidden' : undefined}
            header={'Интересы'} 
            content={<InterestsContent 
                        interests={userProfile.interests} 
                    />} 
        />
      </div>
    </>
  );
}

export default App;
