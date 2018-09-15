/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tabbar from 'react-native-tabbar-bottom';
import ListStack from './containers/ListStack'
import ProfileScreen from './pages/profile';
import {createStore} from 'redux';
import reducer from './reducers'
import {Provider} from 'react-redux';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      page: 'List'
    }

    this.indata = {
      TabOptions: [
        {
          page: "List",
          icon: "list",
          iconText: '列表'
        },
        {
          page: "Analytics",
          icon: "analytics",
          iconText: '数据'
        },
        {
          page: "Aperture",
          icon: "aperture",
          iconText: '朋友圈'
        },
        {
          page: "Profile",
          icon: "person",
          iconText: '我的'
        },
      ],
      preloadedState: {
        List: {
          dataList: [
            {
              title: '小目标',
              intro: '快来添加你的第一个任务吧',
            }
          ]
        }
      }
    }
    

  }

  /**
   * 针对不同页面渲染对应的tab页面
   */
  renderMain(){
    
    const {page} = this.state;

    switch(page){
      case 'List':
        return <ListStack />
      case 'Profile':
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
            stateFunc={tab => {
              this.setState({page: tab.page})
              // this.props.navigation.setParams({tabTitle: tab.title})
            }}
            activePage={page}
            tabs={this.indata.TabOptions}
          />
    )
  }

  render(){

    // redux 注入
    const store = createStore(reducer, this.indata.preloadedState);

    return (
      <Provider store={store}>

        <View style={styles.container}>

          {this.renderMain()}

          {this.renderFooter()}

        </View>

      </Provider>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});




export default App;


