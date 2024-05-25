import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { chevronBack } from "ionicons/icons";

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
