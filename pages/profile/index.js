import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Container, Left, Right, Icon, Content, List, ListItem, Text, 
    Body, Button } from 'native-base';
import FeedbackScreen from './feedback';
import AboutScreen from './about';

class ProfileScreen extends React.Component {

    static navigationOptions = {
        title: '我的',
      };

    constructor(props){
        super(props);

        this.state = {

        }

        this.indata = {
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

    render() {

        return (
            <Container>
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