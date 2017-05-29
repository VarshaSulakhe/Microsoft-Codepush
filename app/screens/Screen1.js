import React, { Component } from 'react';
import { View } from 'react-native';
import Authentication from './src/Authentication';

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
