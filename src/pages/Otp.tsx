import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import img1 from "./../assets/sitting-1.png";
import img2 from "./../assets/Component 8.png";
import "./Otp.css";

const Otp: React.FC = () => {
  const history = useHistory();
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
        <div className="timer">00:00</div>
        <div>
          <IonRow class="rowctr">
            <IonCol>
              <IonItem>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
        </div>
        <div className="head1">
          Enter Your OTP
          <p>kindly wait for a few secounds to recive your </p>
          <p>OTP in the given mobile number</p>
        </div>
        <div className="btn">
          <IonButton
            color={"warning"}
            shape="round"
            expand="block"
            size="large"
            onClick={(e) => {
              e.preventDefault();
              history.push("createacc");
            }}
          >
            Submit
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Otp;
