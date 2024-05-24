import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import "./Started.css";

const Started: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="topright"> </div>

        <div>
          <div className="heading1">
            <h2>comarade </h2>
            <h2>community</h2>
          </div>
        </div>

        <div className="bmbtn">
          <IonButton
            shape="round"
            color={"dark"}
            expand="full"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              history.push("/welcome");
            }}
          >
            Get started <IonIcon name="arrow-forward"></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Started;
