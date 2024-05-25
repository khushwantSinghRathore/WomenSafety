import {
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
      </IonContent>
    </IonPage>
  );
};

export default Createacc;
