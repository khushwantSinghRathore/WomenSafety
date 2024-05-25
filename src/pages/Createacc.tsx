import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import "./Createacc.css";
import { useHistory } from "react-router-dom";
import { chevronBack } from "ionicons/icons";

const Createacc: React.FC = () => {
  const history = useHistory();
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
        <div className="inptfd">
          <IonItem>
            <IonInput label="Name"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Email"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput label="Password" type="password"></IonInput>
          </IonItem>
        </div>
        <div className="inptselt">
          <IonList>
            <IonItem>
              <IonSelect placeholder="user type" interface="popover">
                <div slot="label">user type</div>
                <IonSelectOption value="user">user</IonSelectOption>
                <IonSelectOption value="voluenteer">voluenteer</IonSelectOption>
                <IonSelectOption value="layer">layer</IonSelectOption>
                <IonSelectOption value="police">police</IonSelectOption>
                <IonSelectOption value="Ngo">Ngo</IonSelectOption>
                <IonSelectOption value="Hospitals">Hospitals</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </div>
        <div className="bmbtn">
          <IonButton
            shape="round"
            color={"dark"}
            expand="full"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              history.push("emergency");
            }}
          >
            Next
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Createacc;
