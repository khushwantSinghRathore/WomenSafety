import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
} from "@ionic/react";
import "./Emergency.css";
import { useHistory } from "react-router-dom";
import { chevronBack } from "ionicons/icons";

const Emergency: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="backicn">
          <IonIcon icon={chevronBack}></IonIcon>
        </div>
        <div className="title">
          <p>Emergency</p>
          <p>contacts</p>
        </div>
        <div className="inptfd">
          <IonItem>
            <IonInput
              label="Number1 relationship:"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="contact no"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Number2 relationship:"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="contact no"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Number3 relationship:"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="contact no"
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              label="Number4 relationship:"
              labelPlacement="stacked"
              clearOnEdit={true}
              placeholder="contact no"
            ></IonInput>
          </IonItem>
          <p className="note">
            <span>Note:</span>Enter your most trustable persons number
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
              history.push("permission");
            }}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Emergency;
