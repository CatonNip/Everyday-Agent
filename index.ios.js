/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import x from './story';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const onButtonPress = () => {
  Alert.alert("x =" + x);
};

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StoryBox messages={["Hello I am Agent Clark. Pleased to meet you. ;D", "So I hear that you're the cool person I'll be working with.","How fortunate that our paths have crossed on this star cossed night."]} />
        <ChoiceBox response1={"Get away from me you creep! >:("} response2={"I think that I am going to be murdered."} />
      </View>
    );
  }
}


class StoryBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.messages.map(function(str) {
          return (<Text style={styles.instructions} key={str}>
          {str}
          </Text>)
        })}
      </View>
    )
  }
}

class ChoiceBox extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={onButtonPress}
        title={this.props.response1}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button
        onPress={onButtonPress}
        title={this.props.response2}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
