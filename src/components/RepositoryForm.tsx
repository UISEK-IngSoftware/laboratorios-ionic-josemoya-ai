import React, { useEffect, useState } from "react";
import { IonButton, IonInput, IonText, IonTextarea } from "@ionic/react";
import { RepositoryPayload } from "../interfaces/RepositotyPayload";

interface RepositoryFormProps {
    initialData: RepositoryPayload;
    buttonText: string;
    errorMsg?:string;
    onSubmit: (data: RepositoryPayload) => Promise<void>;
}

const RepositoryForm: React.FC<RepositoryFormProps> = ({ initialData, buttonText, onSubmit }) => {
    const [repoFormData, setRepoFormData] = useState<RepositoryPayload>(initialData);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        setRepoFormData(initialData);
    }, [initialData]);

    const save = async () => {
        if (repoFormData.name.trim() === "") {
            setErrorMsg("El nombre del repositorio es obligatorio.");
            return;
        }
        setErrorMsg("");
        await onSubmit(repoFormData);
    };

    return (
        <div className="form-conteiner">
            <IonInput
                className="from-field"
                label="Nombre del repositorio"
                labelPlacement="floating"
                placeholder="Ingrese el nombre del repositorio"
                value={repoFormData.name}
                onIonChange={(e) =>
                    setRepoFormData({
                        ...repoFormData,
                        name: e.detail.value || ""
                    })
                }/>
            <IonTextarea
                className="from-field"
                label="Descripción"
                labelPlacement="floating"
                placeholder="Ingrese la descripción del repositorio"
                rows={6}
                value={repoFormData.description}
                onIonChange={(e) =>
                    setRepoFormData({
                        ...repoFormData,
                        description: e.detail.value || ""
                    })
                }/>
            {errorMsg && <IonText color="danger">{errorMsg}</IonText>}
            <IonButton
                className="from-field"
                expand="block"
                onClick={save}
            >
                {buttonText}
            </IonButton>
        </div>
    );
};

export default RepositoryForm;