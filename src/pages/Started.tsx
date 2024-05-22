import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import "./Started.css";

const Started: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="topright"> </div>

        <div>
          <div className="heading">
            <h2>comarade </h2>
            <h2>community</h2>
          </div>
        </div>

        <div className="bmbtn">
          <IonButton shape="round" color={"dark"} expand="full" size="large">
            Get started <IonIcon name="arrow-forward"></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Started;
