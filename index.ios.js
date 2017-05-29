import React, { Component } from 'react';
import registerApp from './app/index';
import CodePush from 'react-native-code-push';

class reactnativeCodepush extends Component {

  componentDidMount() {
    CodePush.sync({updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE})
      .then(update => console.log('update', update))
      .catch(err => console.log('update error', err));
  }

}
registerApp();
