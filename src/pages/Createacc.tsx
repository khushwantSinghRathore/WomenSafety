import { IonContent, IonIcon, IonPage } from "@ionic/react";
import "./Createacc.css";
import { chevronBack } from "ionicons/icons";

const Createacc: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="backicn">
          <IonIcon icon={chevronBack}></IonIcon>
        </div>
        <div className="title">
          <p>create</p>
          <p>account</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Createacc;
