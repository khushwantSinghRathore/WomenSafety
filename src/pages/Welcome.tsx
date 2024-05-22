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

const Welcome: React.FC = () => {
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
            <IonIcon name="flag" slot="start"></IonIcon>
            <IonInput placeholder="Mobile Number"></IonInput>
          </IonItem>
        </div>
        <div className="btn">
          <IonButton
            color={"warning"}
            shape="round"
            expand="block"
            size="large"
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
