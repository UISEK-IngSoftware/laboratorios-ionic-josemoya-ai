import { IonAlert, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import "./RepoItem.css";
import React from "react";
import { pencilOutline, trashOutline } from "ionicons/icons";
import { Repository } from "../interfaces/Repository";
import { useHistory } from "react-router";

interface RepoItemProps extends Repository {
  onDelete: (repository: Repository) => void;
}

const RepoItem: React.FC<RepoItemProps> = ({ onDelete, ...repository }) => {
  const history = useHistory();
  const [showAlert, setShowAlert] = React.useState(false);
  const goToEdit = () => {
    history.push({
      pathname: "/edit-repository",
      state: {
        repository
      }
    });
  };

    return (
      <IonItemSliding>
            
        <IonItem>
          <IonThumbnail slot='start'>
            <img alt={repository.name} src={repository.owner.avatar_url} />
          </IonThumbnail>
          <IonLabel>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <p>Lenguaje: {repository.language}</p>
          </IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption onClick={goToEdit}>
            <IonIcon icon={pencilOutline} slot='icon-only'/>
          </IonItemOption>
          <IonItemOption color="danger" onClick={() => setShowAlert(true)}>
            <IonIcon icon={trashOutline} slot='icon-only'/>
          </IonItemOption>
        </IonItemOptions>

        <IonAlert
          isOpen={showAlert}
          header="Eliminar repositorio"
          message={`¿Desea eliminar <strong>${repository.name}</strong>?`}
          onDidDismiss={() => setShowAlert(false)}
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
            },
            {
              text: "Eliminar",
              role: "destructive",
              cssClass: "alert-button-danger",
              handler: () => {
                onDelete(repository);
              }
            }
          ]}
        />

      </IonItemSliding>
  )
}

export default RepoItem;