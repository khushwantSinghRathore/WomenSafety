import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
} from "@ionic/react";
import { chevronBack, cloudUploadOutline } from "ionicons/icons";
import "./Verification.css";

const Verification: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="backicn">
          <IonIcon icon={chevronBack}></IonIcon>
        </div>
        <div className="title">
          <p>verification</p>
        </div>
        <div className="midentry">
          <p>1. Aadhar Upload</p>
          <div className="uploaddash">
            <IonIcon icon={cloudUploadOutline}></IonIcon>
            <p>tap to upload</p>
          </div>
          <p>2. Age</p>
          <IonItem>
            <IonInput clearOnEdit={true} placeholder=""></IonInput>
          </IonItem>
          <p>3. Profession</p>
          <IonItem>
            <IonInput clearOnEdit={true} placeholder=""></IonInput>
          </IonItem>
          <p>4. Aadhar Number</p>
          <IonItem>
            <IonInput clearOnEdit={true} placeholder=""></IonInput>
          </IonItem>
        </div>

        <div className="bmbtn">
          <IonButton shape="round" color={"dark"} expand="full" size="large">
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Verification;
