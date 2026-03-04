import './App.css';
import Card from './components/card/Card';
import ContactInformationContent from './components/contactInformation/ContactInformationContent';
import userProfile from './components/user/userProfile'
import LocationContent from './components/location/LocationContent';
import InterestsContent from './components/interests/interestsContent';
import Description from './components/description/Description';

function App() {

console.log('userProfile.contactInfo:', userProfile.contactInfo);

  return (
    <>
      <Description
          photoUrl={userProfile.protoUrl}
          name={userProfile.userName}
          description={userProfile.userDescription}
          />
      <div className="main">
      <Card key='contactInformationCard'
            header='Контактная информация'>
              <ContactInformationContent 
                        email={userProfile.contactInfo.email} 
                        phone={userProfile.contactInfo.phone}
                    />
      </Card>
        <Card key={'locationCard'} className={!userProfile.location ? 'hidden' : undefined}
            header={'Местоположение'}>
            <LocationContent 
                        country={userProfile.location?.country} 
                        city={userProfile.location?.city}
                        adress={userProfile.location?.address}
                        /> 
        </Card>
        <Card key={'interestsCard'} className={!userProfile.interests ? 'hidden' : undefined}
            header={'Интересы'}>
            <InterestsContent key={"interests}
                        interests={userProfile.interests} 
            /> 
        </Card>
      </div>
    </>
  );
}

export default App;
