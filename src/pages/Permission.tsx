import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonIcon,
  IonPage,
  IonRow,
  IonToggle,
} from "@ionic/react";
import {
  camera,
  chevronBack,
  mic,
  navigate,
  notifications,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import "./Permission.css";

const Permission: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="backicn">
          <IonIcon icon={chevronBack}></IonIcon>
        </div>
        <div className="title">
          <p>permision for </p>
          <p>security</p>
        </div>

        <div>
          <IonCard>
            <IonRow>
              <IonCol className="titlename">
                <IonIcon icon={camera}></IonIcon> Camera
              </IonCol>
              <IonCol className="tog">
                <IonToggle checked={true} color="dark"></IonToggle>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol className="titlename">
                <IonIcon icon={mic}></IonIcon> audio
              </IonCol>
              <IonCol className="tog">
                <IonToggle checked={true} color="dark"></IonToggle>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol className="titlename">
                <IonIcon icon={navigate}></IonIcon> location
              </IonCol>
              <IonCol className="tog">
                <IonToggle checked={true} color="dark"></IonToggle>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol className="titlename">
                <IonIcon icon={notifications}></IonIcon> notification
              </IonCol>
              <IonCol className="tog">
                <IonToggle checked={true} color="dark"></IonToggle>
              </IonCol>
            </IonRow>
          </IonCard>
          <p className="note">
            <span>note:</span> information are taken while in emergecy personal
            information are avoided
          </p>
        </div>
        <div className="bmbtn">
          <IonButton
            shape="round"
            color={"dark"}
            expand="full"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              history.push("verification");
            }}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Permission;
