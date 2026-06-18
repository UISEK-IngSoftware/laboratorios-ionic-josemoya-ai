import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <RepoItem
            name='Repositorio 1'
            desciption='Descripcion de repo 1'
            language='JavaScript'
            avatarUrl='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/001.png'
          />
          <RepoItem
            name='Repositorio 2'
            desciption='Descripcion de repo 2'
            language='JavaScript'
            avatarUrl='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/004.png'
          />
          <RepoItem
            name='Repositorio 3'
            desciption='Descripcion de repo 3'
            language='JavaScript'
            avatarUrl='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/007.png'
          />
          <RepoItem
            name='Repositorio 4'
            desciption='Descripcion de repo 4'
            language='JavaScript'
            avatarUrl='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/010.png'
          />
          <RepoItem
            name='Repositorio 5'
            desciption='Descripcion de repo 5'
            language='JavaScript'
            avatarUrl='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/013.png'
          />
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
