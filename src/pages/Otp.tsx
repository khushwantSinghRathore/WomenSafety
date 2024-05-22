import { IonCol, IonContent, IonPage, IonRow } from "@ionic/react";
import img1 from "./../assets/sitting-1.png";
import img2 from "./../assets/Component 8.png";
import "./Otp.css";

const Otp: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="logotop">
          <IonRow>
            <IonCol size="2"></IonCol>
            <IonCol>
              <img src={img1} alt="" />
            </IonCol>
            <IonCol>
              <img src={img2} alt="" />
            </IonCol>
            <IonCol size="2"></IonCol>
          </IonRow>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Otp;
