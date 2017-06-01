import React, { Component } from 'react';
import { View, AppState } from 'react-native';
import Authentication from './src/Authentication';
import codePush from "react-native-code-push";

class Screen extends Component {
 constructor() {
      super();
      this.state = {
         email: '',
         password: ''
      };
   }
   updateEmail = (text) => {
      this.setState({ email: text });
   }
   updatePassword = (text) => {
      this.setState({ password: text });
   }
   login = () => {
      if (this.state.email=='varsha' && this.state.password=='vh') {
         console.log('email: ' + this.state.email );
         this.props.navigator.push({
         	screen: 'Screen2',
         	title: 'Screen2',
         });
      }
      else {
        console.log('not done');
      }
     
   }

  state = {
    appState: AppState.currentState
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (appState) => {
    this.setState({ appState });
    console.log(this.state.appState);
    if(appState=='active')
    {
       var updateDialogOptions = {
        updateTitle: "Update",
        mandatoryUpdateMessage: "You will be updated to the latest version of the app.",
        mandatoryContinueButtonLabel: "Continue",
        optionalUpdateMessage: "Update available. Install?",
        optionalIgnoreButtonLabel: "No",
        optionalInstallButtonLabel: "Yes",
        };

    
      var syncStatusCallback = function (syncStatus) {
        switch (syncStatus) {
            // Result (final) statuses
            case SyncStatus.UPDATE_INSTALLED:
                console.log("title: Sweet Success ,template: Restart your app to complete the update.");
                break;
            case SyncStatus.UP_TO_DATE:
                console.log( "title: All Good, template: Your application is up to date.");
                break;
            case SyncStatus.UPDATE_IGNORED:
                console.log("The user decided not to install the optional update.");
                break;
            case SyncStatus.ERROR:
                console.log("title: @#$!,template: Something went wrong. Try restarting your app");
                break;

            // Intermediate (non final) statuses
            case SyncStatus.CHECKING_FOR_UPDATE:
                console.log("Checking for update.");
                break;
            case SyncStatus.AWAITING_USER_ACTION:
                console.log("Alerting user.");
                break;
            case SyncStatus.DOWNLOADING_PACKAGE:
                console.log("Downloading package.");
                break;
            case SyncStatus.INSTALLING_UPDATE:
                console.log("Installing update");
                break;
        }
      };
    codePush.sync({ updateDialog: updateDialogOptions, installMode: codePush.InstallMode.IMMEDIATE});

    }
  }

   

   render() {
      return (
         <View>
            <Authentication
               updateEmail={this.updateEmail}
               updatePassword={this.updatePassword}
               login={this.login}
            />
         </View>
      );
   }
}



export default Screen;
