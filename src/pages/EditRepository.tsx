import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory, useLocation } from "react-router";

import RepositoryForm from "../components/RepositoryForm";
import LoadingSpinner from "../components/LoadingSpinner";

import { Repository } from "../interfaces/Repository";
import { updateRepository } from "../services/GithubService";

const EditRepository: React.FC = () => {
    const history = useHistory();
    const location = useLocation<{
        repository: Repository;
    }>();
    const repository = location.state?.repository;
    const [loading, setLoading] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");

    if (!repository) {
        history.replace("/tab1");
        return null;
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Editar Repositorio</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <RepositoryForm
                    initialData={{
                        name: repository.name,
                        description: repository.description || ""
                    }}
                    buttonText="Actualizar"
                    errorMsg={errorMsg}
                    onSubmit={async (data) => {
                        setLoading(true);
                        try {
                            await updateRepository(
                                repository.owner.login,
                                repository.name,
                                data
                            );
                            history.push("/tab1");
                        } catch (error) {
                            if (error instanceof Error) {
                                setErrorMsg(error.message);
                            }
                        } finally {
                            setLoading(false);
                        }
                    }}
                />

                <LoadingSpinner isOpen={loading} />
            </IonContent>
        </IonPage>
    );
};

export default EditRepository;