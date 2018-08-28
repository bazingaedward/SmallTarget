import React from 'react';
import {Button} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: '首页',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }