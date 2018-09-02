/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, 
  Alert, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, 
  TouchableWithoutFeedback, ScrollView, Image, FlatList, SectionList, ActivityIndicator} from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';
import ListScreen from './pages/list';
import ProfileScreen from './pages/profile';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: 'ListScreen'
    }

    this.indata = {
      TabOptions: [
        {
          page: "ListScreen",
          icon: "list",
          iconText: '列表'
        },
        {
          page: "AnalyticsScreen",
          icon: "analytics",
          iconText: '数据'
        },
        {
          page: "ApertureScreen",
          icon: "aperture",
          iconText: '朋友圈'
        },
        {
          page: "ProfileScreen",
          icon: "person",
          iconText: '我的'
        },
      ]
    }

  }

  /**
   * 针对不同页面渲染对应的tab页面
   */
  renderMain(){
    
    const {page} = this.state;

    switch(page){
      case 'ListScreen':
        return <ListScreen />
      case 'ProfileScreen':
        return <ProfileScreen />
      
    }

  }

  /**
   * 渲染页脚：app导航栏
   */
  renderFooter(){

    const {page} = this.state;

    return (
        <Tabbar
            tabbarBgColor={'#4267b2'}
            stateFunc={(tab) => {
              this.setState({page: tab.page})
              // this.props.navigation.setParams({tabTitle: tab.title})
            }}
            activePage={page}
            tabs={this.indata.TabOptions}
          />
    )
  }

  render(){

    return (
      <View style={styles.container}>

        {this.renderMain()}

        {this.renderFooter()}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;


