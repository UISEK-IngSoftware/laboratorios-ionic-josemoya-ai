import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil de Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil de Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="card-container">
          <IonCard className='card'>
            <img alt='Avatar' src='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png'/>
            <IonCardHeader>
              <IonCardTitle>José Moya Miranda</IonCardTitle>
              <IonCardSubtitle>JOSEMOYA-AI</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Desarrollador web con poca experiencia</p>
            </IonCardContent>
          </IonCard>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
