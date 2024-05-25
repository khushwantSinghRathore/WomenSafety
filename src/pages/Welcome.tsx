import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
} from "@ionic/react";
import "./Welcome.css";
import lock from "./../assets/logo_lock.png";
import { useHistory } from "react-router-dom";
import { flag } from "ionicons/icons";

const Welcome: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
        <div className="logo">
          <img src={lock} alt="logo"></img>
        </div>
        <div className="heading">
          <p className="head1">welcome to</p>
          <p className="head2">comarade</p>
        </div>
        <div className="input">
          <IonItem>
            <IonIcon icon={flag} slot="start"></IonIcon>
            <IonInput placeholder="Mobile Number"></IonInput>
          </IonItem>
        </div>
        <div className="btn">
          <IonButton
            color={"warning"}
            shape="round"
            expand="block"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              history.push("otp");
            }}
          >
            Get OTP
          </IonButton>
        </div>
        <div className="privacy">
          <p className="grey">By signing up,you are agree to our </p>
          <p className="blue">Terms of Service & privacy </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
