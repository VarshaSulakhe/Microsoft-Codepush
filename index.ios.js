import React, { Component } from 'react';
import codePush from "react-native-code-push";
import registerApp from './app/index';
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class MyApp extends Component {
	
}

MyApp = codePush(codePushOptions)(MyApp);
registerApp();
