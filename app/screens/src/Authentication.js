import React, { Component } from 'react';

import {
   View,
   Text,
   TouchableHighlight,
   TextInput,
   StyleSheet
} from 'react-native';

const Authentication = (props) => {
   return (
      <View style={styles.container}>
      <Text>Welcome</Text>
         <TextInput
           
            style={styles.input}
            placeholder='Email'
            autoCapitalize='none'
            onChangeText={props.updateEmail}
         />
         <TextInput
            
            style={styles.input}
            placeholder='Password'
            autoCapitalize='none'
            secureTextEntry={true}
            onChangeText={props.updatePassword}
         />
         <TouchableHighlight
            style={styles.submit}
            onPress={() => props.login(props.email, props.password)}
         >
            <Text>
               Submit
            </Text>
         </TouchableHighlight>
      </View>
         );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 23,
      marginTop: 100
   },
   input: {
      margin: 15,
      height: 40,
      width: 300,
      borderColor: 'grey',
      borderWidth: 1
   },
   submit: {
      width: 100,
      height: 40,
      backgroundColor: 'silver',
      padding: 10,
   
   },
   
});

export default Authentication;
