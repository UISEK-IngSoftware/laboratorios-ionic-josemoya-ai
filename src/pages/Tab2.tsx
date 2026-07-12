import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';
import { useHistory } from 'react-router';
import { createRepository } from '../services/GithubService';
import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import RepositoryForm from '../components/RepositoryForm';

const Tab2: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  useIonViewWillEnter (() => {
    setErrorMsg("");
  });
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <RepositoryForm
          initialData={{
            name: "",
            description: ""
          }}
          buttonText="Guardar"
          errorMsg={errorMsg}
          onSubmit={async (repository) => {
            setLoading(true);
            try{
              await createRepository(repository);
                history.push("/tab1");
            }catch(error){
              if(error instanceof Error){
                setErrorMsg(error.message);
              }
            }finally{
              setLoading(false);
            }
          }}
        />
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
