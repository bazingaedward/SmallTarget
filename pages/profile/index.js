import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button, Header, Title } from 'native-base';
import FeedbackScreen from './feedback';
import AboutScreen from './about';

class ProfileScreen extends React.Component {

    static navigationOptions = {
        header: null
        // title: '我的',
      };

    constructor(props){
        super(props);

        this.state = {

        }

        this.indata = {
            title: '我的',
            titleIcon: 'person',
            listView: [
                {
                    title: '关于',
                    url: 'About',
                    icon: 'settings',
                    iconColor: 'grey'
                },
                {
                    title: '意见反馈',
                    url: 'Feedback',
                    icon: 'mail',
                    iconColor: '#007AFF'
                },
            ]
        }

    }

    /**
     * 渲染导航栏
     * react-navigation无法提供header中的this绑定，故取消 
     */
    renderHeader(){

        return (
          <Header>
            <Left>
              <Button transparent>
                <Icon name={this.indata.titleIcon} />
              </Button>
            </Left>
            <Body>
              <Title>{this.indata.title}</Title>
            </Body>
            <Right>
            </Right>
          </Header>
        )
  
      }

    render() {

        return (
            <Container>

                {this.renderHeader()}
                <Content>
                <List>
                    {this.indata.listView.map((item, idx) => {
                        return (
                            <ListItem key={idx} icon onPress={()=>{this.props.navigation.navigate(item.url)}}>
                                <Left>
                                    <Button style={{ backgroundColor: item.iconColor }}>
                                        <Icon name={item.icon} />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>{item.title}</Text>
                                </Body>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </ListItem>
                        )
                    })}
                    
                </List>
                </Content>
            </Container>
        )
    }
}

export default createStackNavigator(
    {
        Home: ProfileScreen,
        Feedback: FeedbackScreen,
        About: AboutScreen,
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
          headerTitleStyle: { textAlign: 'center' },
          headerStyle: {
            backgroundColor: '#4267b2',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        },
      }
);