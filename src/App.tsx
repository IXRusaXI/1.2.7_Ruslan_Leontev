import defaultUserPhoto from './assets/photo-default.svg';
import './App.css';
import Card from './components/card/Card';
import ContactInformationContent from './components/contactInformation/ContactInformationContent';
import userProfile from './components/user/userProfile'

function App() {
  return (
    <>
      <div className="description">
        <img className="photo--default" src={defaultUserPhoto} />
        <h4>{userProfile.userName}</h4>
        <p>{userProfile.userDescription}</p>
      </div>
      <div className="main">
        <Card 
            header={'Контактная информация'} 
            content={<ContactInformationContent 
                        email={userProfile.contactInfo.email} 
                        phone={userProfile.contactInfo.phone}
                    />} 
        />
        <Card 
            header={'Местоположение'} 
            content={<ContactInformationContent 
                        email={userProfile.contactInfo.email} 
                        phone={userProfile.contactInfo.phone}
                    />} 
        />
        <Card 
            header={'Контактная информация'} 
            content={<ContactInformationContent 
                        email={userProfile.contactInfo.email} 
                        phone={userProfile.contactInfo.phone}
                    />} 
        />
        <div className="card">
          <div className="card-header">Местоположение</div>
          <div className="card-content"></div>
        </div>
        <div className="card">
          <div className="card-header">Интересы</div>
          <div className="card-content"></div>
        </div>
      </div>
    </>
  );
}

export default App;
