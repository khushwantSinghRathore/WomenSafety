import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import Started from "./pages/Started";
import Welcome from "./pages/Welcome";
import Otp from "./pages/Otp";
import Createacc from "./pages/Createacc";
import Emergency from "./pages/Emergency";
import Permission from "./pages/Permission";
import Verification from "./pages/Verification";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/started" />
        </Route>
        <Route exact path="/started">
          <Started />
        </Route>
        <Route exact path="/createacc">
          <Createacc></Createacc>
        </Route>
        <Route exact path="/otp">
          <Otp />
        </Route>
        <Route exact path="/emergency">
          <Emergency></Emergency>
        </Route>
        <Route exact path="/permission">
          <Permission></Permission>
        </Route>
        <Route exact path="/verification">
          <Verification></Verification>
        </Route>
        <Route exact path="/welcome">
          <Welcome />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
