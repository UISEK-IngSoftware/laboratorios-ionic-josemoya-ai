import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
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

        <div className="form-conteiner">
          <IonInput
            className='from-field'
            label='Nombre del repositorio'
            labelPlacement='floating'
            placeholder='Ingrese el nombre del repositorio'
          />

          <IonTextarea
            className='from-field'
            label='Descripción'
            labelPlacement='floating'
            placeholder='Ingrese al descripción del repositorio'
            rows={6}
          />

          <IonButton
            className='from-field'
            expand='block'
            fill='solid'
          >Guardar</IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
